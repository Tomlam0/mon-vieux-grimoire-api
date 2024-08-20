import { FastifyInstance } from 'fastify';

import { getOneBook } from '@/controllers/book/index';
import { BookResponseSchema } from '@/schema/book/book.schema';

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
              schema: BookResponseSchema.omit({ id: true }),
            },
          },
        },
      },
    },

    handler: getOneBook,
  });
}
