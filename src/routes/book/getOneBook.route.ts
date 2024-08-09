import { FastifyInstance } from 'fastify';

import { getOneBook } from '@controllers/book/index';
import { BookResponseSchema } from '@/schema/book/book.schema';
import { ERROR404, ERROR500 } from '@/constants/response.constants';

export async function getOneBookRoute(app: FastifyInstance) {
  /**
   * ========================================
   *        Display a specific book
   * ========================================
   */
  app.get('/:id', {
    schema: {
      tags: ['Book'],
      summary: 'Display a specific book based on id, accessible to unauthenticated users as well',

      response: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: BookResponseSchema.omit({ id: true }),
            },
          },
        },
        404: ERROR404,
        500: ERROR500,
      },
    },

    handler: getOneBook,
  });
}
