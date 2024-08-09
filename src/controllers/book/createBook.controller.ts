/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';

import prisma from '@lib/prisma';
import s3 from '@lib/s3';
import { BookSchema } from '@/schema/book/book.schema';

/**
 * ========================================
 *        Add a new book
 * ========================================
 */
export const createBook = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    // Datas from user form
    const userInputData = BookSchema.parse(req.body);

    // Upload image into S3 bucket
    const imageKey = `${uuidv4()}-${userInputData.image.filename}`;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const uploadResult = await s3.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: imageKey,
        Body: userInputData.image.buffer,
        ContentType: userInputData.image.mimetype,
      })
    );

    const imageUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${imageKey}`;

    const newBookData = {
      ...userInputData,
      // Add userId to data
      userId: req.user as string,

      // Add image url to data
      imageUrl,

      // Ensure each rating has the userId
      ratings: {
        create: userInputData.ratings.map((rating) => ({
          ...rating,
          userId: req.user as string,
        })),
      },

      // Initialize averageRating to the initial rating, since it's the only rating
      averageRating: userInputData.ratings[0].grade,
    };

    const newBook = await prisma.book.create({
      data: newBookData,
      include: {
        ratings: true,
      },
    });

    res.status(201).send(newBook);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      res.status(400).send({ error: error.errors });
    } else {
      res.status(500).send({ error: error.message });
    }
  }
};
