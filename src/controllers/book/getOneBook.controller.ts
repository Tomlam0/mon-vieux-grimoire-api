/* eslint-disable @typescript-eslint/no-explicit-any */

import { FastifyRequest, FastifyReply } from 'fastify';
import { BookResponseSchema } from '@/schema/book/book.schema';

/**
 * ========================================
 *        Display specific book
 * ========================================
 */
export const getOneBook = async (
  req: FastifyRequest<{ Params: { id: string } }>,
  res: FastifyReply
) => {
  try {
    const book = await req.server.prisma.book.findUnique({
      where: {
        id: req.params.id,
      },
    });

    if (!book) {
      res.status(404).send({ error: 'Book not found' });
      return;
    }

    // Validate the book data using Zod schema before sending it
    const validatedBook = BookResponseSchema.parse(book);

    res.status(200).send(validatedBook);
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};
