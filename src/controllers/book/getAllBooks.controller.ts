import { FastifyRequest, FastifyReply } from 'fastify';

import prisma from '@lib/prisma';

/**
 * ========================================
 *        Display all books
 * ========================================
 */
export const getAllBooks = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    const books = await prisma.book.findMany({
      include: {
        ratings: true, // Include ratings in the results
      },
    });

    res.status(200).send(books);
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};
