import { FastifyRequest, FastifyReply } from 'fastify';

/**
 * ========================================
 *        Display the 3 best books
 * ========================================
 */
export const getBestBooks = async (req: FastifyRequest, res: FastifyReply) => {
  const books = await req.server.prisma.book.findMany({
    orderBy: {
      averageRating: 'desc',
    },
    take: 3,
  });

  if (!books || books.length === 0) {
    res.status(404).send({
      message: 'No books found.',
    });
  }

  res.status(200).send(books);
};
