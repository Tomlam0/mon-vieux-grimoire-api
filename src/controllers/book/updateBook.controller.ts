/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import sharp from 'sharp';

import { BookSchema, CreateBookResponseSchema } from '@/schema/book/book.schema';

/**
 * ========================================
 *        Modify book information
 * ========================================
 */
export const updateBook = async (
  req: FastifyRequest<{ Params: { id: string } }>,
  res: FastifyReply
) => {
  // Schema for update with optionnal fields
  const UpdateBookSchema = BookSchema.partial();
  const UpdateResponseBookSchema = CreateBookResponseSchema.partial();

  // Verify if the book ID is well structured before sending unnecessary requests to the DB.
  const IdSchema = z.string().uuid();
  const validatedId = IdSchema.parse(req.params.id);

  const book = await req.server.prisma.book.findUnique({
    where: {
      id: validatedId,
    },
  });

  if (!book) {
    return res.status(404).send({ error: 'Book not found' });
  }

  // Check if the authenticated user is the owner of the book
  const userId = req.user as string;

  if (book.userId !== userId) {
    return res.status(403).send({ message: 'You are not authorized to update this book' });
  }

  let fields: Record<string, any> = {};
  let fileInfo: any = null;

  // Check if the request is multipart
  if (req.isMultipart()) {
    const parts = req.parts();

    for await (const part of parts) {
      if (part.type === 'file' && part.file) {
        // Only process if a file is sent
        const buffers: Buffer[] = [];
        for await (const chunk of part.file) {
          buffers.push(chunk);
        }
        const fileBuffer = Buffer.concat(buffers);

        // Using sharp to reduce picture size and transform to webp
        const optimizedBuffer = await sharp(fileBuffer).webp({ quality: 80 }).toBuffer();

        fileInfo = {
          filename: part.filename.replace(/\.[^.]+$/, '.webp'),
          mimetype: 'image/webp',
          size: optimizedBuffer.length,
          buffer: optimizedBuffer,
        };
      } else if (part.type === 'field') {
        fields[part.fieldname] = part.value;
      }
    }
  } else {
    // Explicitly type the body for a simple JSON request
    fields = req.body as Record<string, any>;
  }

  // Normalize text fields
  const normalizeField = (field: string): string =>
    field
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  // Construct the update data object
  const userInputData = {
    title: fields.title ? normalizeField(fields.title) : undefined,
    author: fields.author ? normalizeField(fields.author) : undefined,
    genre: fields.genre ? normalizeField(fields.genre) : undefined,
    year: fields.year ? parseInt(fields.year, 10) : undefined,
    ratings: fields.ratings
      ? fields.ratings.map((r: any) => ({ grade: parseInt(r.grade, 10) }))
      : undefined,
    // Only include file if it's available
    file: fileInfo || undefined,
  };

  // Validate with Zod using UpdateBookSchema
  const validatedData = UpdateBookSchema.parse(userInputData);

  // If a new file is uploaded, delete the old file from S3
  // eslint-disable-next-line prefer-destructuring
  let imageUrl = book.imageUrl;

  if (validatedData.file) {
    const currentImageKey = book.imageUrl.split('/').pop();

    if (currentImageKey) {
      await req.server.s3.send(
        new DeleteObjectCommand({
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: currentImageKey,
        })
      );
    }

    // Use the provided title, or fallback to the existing one from the database
    const titleForImage = fields.title ? normalizeField(fields.title) : book.title;
    // Normalize title for file name (replace spaces, special characters, etc.)
    const normalizedTitleFile = titleForImage
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');

    // Upload the new image
    const newImageKey = `${uuidv4()}-${normalizedTitleFile}.webp`;

    await req.server.s3.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: newImageKey,
        Body: validatedData.file.buffer,
        ContentType: validatedData.file.mimetype,
        ACL: 'public-read',
      })
    );
    imageUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${newImageKey}`;
  }

  const updateData: any = {
    title: validatedData.title,
    author: validatedData.author,
    genre: validatedData.genre,
    year: validatedData.year,
    imageUrl,
  };

  // Remove undefined fields (those not being updated)
  Object.keys(updateData).forEach((key) => {
    if (updateData[key] === undefined) {
      delete updateData[key];
    }
  });

  // Update the book in the database
  const updatedBook = await req.server.prisma.book.update({
    where: { id: validatedId },
    data: updateData,
    include: {
      ratings: true,
    },
  });

  return res.status(200).send(UpdateResponseBookSchema.parse(updatedBook));
};
