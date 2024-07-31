/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyRequest, FastifyReply } from 'fastify';

import prisma from '@lib/prisma';
import { Book } from '@schema/generated-schemas/index';

type GetOneBookParams = {
  id: Book['id'];
};

/**
 * ========================================
 *        Display specific book
 * ========================================
 */
export const getOneBook = async (
  req: FastifyRequest<{ Params: GetOneBookParams }>,
  res: FastifyReply
) => {
  try {
    const book = await prisma.book.findUnique({
      where: {
        id: req.params.id,
      },
    });

    if (!book) {
      res.status(404).send({ error: 'Book not found' });
      return;
    }

    res.status(200).send(book);
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};
