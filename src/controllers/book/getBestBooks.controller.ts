/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyRequest, FastifyReply } from 'fastify';

import prisma from '@lib/prisma';

/**
 * ========================================
 *        Display the 3 best books
 * ========================================
 */
export const getBestBooks = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    const books = await prisma.book.findMany({
      orderBy: {
        averageRating: 'desc',
      },
      take: 3,
    });

    res.status(200).send(books);
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};
