import { FastifyInstance } from 'fastify';

import { getAllBooks } from '@/controllers/book/index';
import { GetAllBooksSchema } from '@/schema/book/book.schema';
import { ERROR404 } from '@/constants/response.constants';

export async function getAllBooksRoute(app: FastifyInstance) {
  /**
   * ========================================
   *        Display all books
   * ========================================
   */
  app.get('/', {
    // Openapi doc
    schema: {
      tags: ['Book'],
      summary: 'Display all books with a maximum of 9 books per page in a paginated format.',

      response: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: GetAllBooksSchema,
            },
          },
        },
        404: ERROR404('No books found.'),
      },
    },

    handler: getAllBooks,
  });
}
