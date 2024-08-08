import { FastifyInstance } from 'fastify';

import { getOneBook } from '@controllers/book/index';
import { BookSchema } from '@/schema/book/book.schema';

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
        200: BookSchema,
      },
    },

    handler: getOneBook,
  });
}
