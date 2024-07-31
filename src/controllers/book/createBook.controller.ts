/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';

import prisma from '@lib/prisma';
import { BookSchema } from '@schema/book.schema';

/**
 * ========================================
 *        Add a new book
 * ========================================
 */
export const createBook = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    // Datas from user form
    const userInputData = BookSchema.parse(req.body);

    const newBookData = {
      ...userInputData,
      userId: req.user as string,

      ratings: {
        create: userInputData.ratings.map((rating) => ({
          ...rating,
          userId: req.user as string, // Ensure each rating has the userId
        })),
      },

      averageRating: 0, // Initialize averageRating to 0
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
