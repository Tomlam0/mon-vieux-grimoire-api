import { FastifyRequest, FastifyReply } from 'fastify';

import prisma from '../../lib/prisma';
import {
  BookInputSchema,
  BookInputRequest,
  BookRequest,
} from '@schema/book.schema';
import { z } from 'zod';

/**
 * ========================================
 *        Add a new book
 * ========================================
 */
export const createBook = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    // Datas from user form
    const userInputData: BookInputRequest = BookInputSchema.parse(req.body);

    // Datas from user form
    const ratingsWithUserId = userInputData.ratings.map((rating) => ({
      ...rating,
      userId: req.user as string,
    }));

    // Datas from user form
    const newBookData: BookRequest = {
      ...userInputData,
      userId: req.user as string,
      ratings: ratingsWithUserId,
      averageRating: 0,
    };

    const newBook = await prisma.book.create({
      data: newBookData,
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
