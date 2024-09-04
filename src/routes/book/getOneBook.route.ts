import { FastifyInstance } from 'fastify';

import { getOneBook } from '@/controllers/book/index';
import { GetBookResponseSchema } from '@/schema/book/book.schema';
import { ERROR404 } from '@/constants/response.constants';

export async function getOneBookRoute(app: FastifyInstance) {
  /**
   * ========================================
   *        Display a specific book
   * ========================================
   */
  app.get('/:id', {
    // Openapi doc
    schema: {
      tags: ['Book'],
      summary: 'Display a specific book based on id, accessible to unauthenticated users as well',

      response: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: GetBookResponseSchema,
            },
          },
        },
        404: ERROR404('Book not found.'),
      },
    },

    handler: getOneBook,
  });
}
