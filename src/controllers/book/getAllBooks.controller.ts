/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyRequest, FastifyReply } from 'fastify';

/**
 * ========================================
 *        Display all books
 * ========================================
 */
export const getAllBooks = async (req: FastifyRequest, res: FastifyReply) => {
  // Fixed pagination: always return 9 books per page
  const query = req.query as { page?: string };
  const page = parseInt(query.page || '1', 10); // Default to page 1 if not provided
  const limit = 9;
  const skip = (page - 1) * limit;

  const books = await req.server.prisma.book.findMany({ skip, take: limit });

  if (!books || books.length === 0) {
    res.status(404).send({
      message: 'No books found.',
    });
  }

  // Fetch the total count of books to calculate the total number of pages
  const totalBooks = await req.server.prisma.book.count();

  // Return paginated result including total books and pages
  return res.status(200).send({
    totalBooks,
    totalPages: Math.ceil(totalBooks / limit),
    currentPage: page,
    books,
  });
};
