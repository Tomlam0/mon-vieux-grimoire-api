import { FastifyInstance } from 'fastify';

import { getAllBooks } from '@/controllers/book/index';
import { BookArraySchema } from '@/schema/book/book.schema';
import { ERROR500 } from '@/constants/response.constants';

export async function getAllBooksRoute(app: FastifyInstance) {
  /**
   * ========================================
   *        Display all books
   * ========================================
   */
  app.get('/', {
    schema: {
      tags: ['Book'],
      summary:
        'Display all books available on the website, accessible to unauthenticated users as well',

      response: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: BookArraySchema,
            },
          },
        },
        500: ERROR500,
      },
    },

    handler: getAllBooks,
  });
}
