import { FastifyInstance } from 'fastify';

import { getBestBooks } from '@/controllers/book/index';
import { BookArraySchema } from '@/schema/book/book.schema';
import { ERROR400 } from '@/constants/response.constants';

export async function getBestBooksRoute(app: FastifyInstance) {
  /**
   * ========================================
   *        Display the 3 best books
   * ========================================
   */
  app.get('/bestrating', {
    // Openapi doc
    schema: {
      tags: ['Book'],
      summary: 'Display the 3 best rated books, accessible to unauthenticated users as well',

      response: {
        200: BookArraySchema,
        400: ERROR400('No books found.'),
      },
    },

    handler: getBestBooks,
  });
}
