import { FastifyInstance } from 'fastify';

import { createBook } from '@controllers/book/index';
import { BookSchema } from '@/schema/book/book.schema';

export async function createBookRoute(app: FastifyInstance) {
  /**
   * ========================================
   *        Add a new book route
   * ========================================
   */
  app.post('/', {
    preValidation: [app.auth],

    schema: {
      tags: ['Book'],
      summary: 'Allow an authenticate user to add a new book',

      security: [{ authToken: [] }],

      body: BookSchema,
    },

    handler: createBook,
  });
}
