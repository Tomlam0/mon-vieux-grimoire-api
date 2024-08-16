/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { fromError } from 'zod-validation-error';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';

import { BookMultipartSchema, BookResponseSchema } from '@/schema/book/book.schema';

/**
 * ========================================
 *        Add a new book
 * ========================================
 */
export const createBook = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    /**
     * We use `req.parts()` to handle both file and text fields in a multipart form submission.
     * - `req.parts()` allows us to iterate over all parts of the multipart request.
     * - Each part can either be a file or a text field.
     * - This approach is necessary when a form submission contains both files (e.g., images) and text fields (e.g., title, author).
     * - By iterating over the parts, we can process and validate each piece of data accordingly.
     */

    // Extract the file
    const parts = req.parts();

    const fields: Record<string, any> = {};
    let fileInfo: any = null;

    for await (const part of parts) {
      if (part.type === 'file') {
        const buffers: Buffer[] = [];
        for await (const chunk of part.file) {
          buffers.push(chunk);
        }
        const fileBuffer = Buffer.concat(buffers);

        fileInfo = {
          filename: part.filename,
          mimetype: part.mimetype,
          size: fileBuffer.length,
          buffer: fileBuffer,
        };
      } else {
        fields[part.fieldname] = part.value;
      }
    }

    // Construct the input data object from the retrieved fields
    const userInputData = {
      title: fields.title,
      author: fields.author,
      genre: fields.genre,
      year: parseInt(fields.year, 10),
      ratings: [
        {
          grade: parseInt(fields['ratings[0][grade]'], 10),
        },
      ],
    };

    // Validate the text fields with Zod
    BookMultipartSchema.shape.body.parse(userInputData);

    // Validate the file with Zod
    if (fileInfo) {
      BookMultipartSchema.shape.file.parse(fileInfo);
    }

    // Generate a unique key for the image in S3
    const imageKey = `${uuidv4()}-${fileInfo.filename}`;

    // Upload the image to S3
    await req.server.s3.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: imageKey,
        Body: fileInfo.buffer,
        ContentType: fileInfo.mimetype,
      })
    );

    const imageUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${imageKey}`;

    // Prepare the data for the new book, including the imageUrl and userId
    const newBookData = {
      ...userInputData,

      userId: req.user as string,

      imageUrl,

      ratings: {
        create: userInputData.ratings.map((rating) => ({
          ...rating,
          userId: req.user as string,
        })),
      },

      // Initialize averageRating to the initial rating, since it's the only rating
      averageRating: userInputData.ratings[0].grade,
    };

    const newBook = await req.server.prisma.book.create({
      data: newBookData,
      include: {
        ratings: true,
      },
    });

    res.status(201).send(BookResponseSchema.parse(newBook));
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      const validationError = fromError(error);
      res.status(400).send(validationError);
    } else {
      res.status(500).send({ error: 'An unexpected error occurred', details: error.message });
    }
  }
};
