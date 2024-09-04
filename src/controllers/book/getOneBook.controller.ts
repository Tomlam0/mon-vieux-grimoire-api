/* eslint-disable @typescript-eslint/no-explicit-any */

import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';

import { GetBookResponseSchema } from '@/schema/book/book.schema';

/**
 * ========================================
 *        Display specific book
 * ========================================
 */
export const getOneBook = async (
  req: FastifyRequest<{ Params: { id: string } }>,
  res: FastifyReply
) => {
  // Verify if Id is well structured before sending useless requests to db.
  const IdSchema = z.string().uuid();
  const validatedId = IdSchema.parse(req.params.id);

  const book = await req.server.prisma.book.findUnique({
    where: {
      id: validatedId,
    },
  });

  if (!book) {
    res.status(404).send({ error: 'Book not found' });
    return;
  }

  const validatedBook = GetBookResponseSchema.parse(book);

  res.status(200).send(validatedBook);
};
