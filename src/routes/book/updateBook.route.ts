import { FastifyInstance } from 'fastify';

import { updateBook } from '@/controllers/book/index';
import { BookSchema } from '@/schema/book/book.schema';

export async function updateBookRoute(app: FastifyInstance) {
  /**
   * ========================================
   *        Modify book informations
   * ========================================
   */
  app.put('/:id', {
    preValidation: [app.auth],

    // Openapi doc
    schema: {
      tags: ['Book'],
      summary: 'Allows only the user who added the book to update it based on its id.',

      security: [{ authToken: [] }],

      body: BookSchema,
    },

    handler: updateBook,
  });
}
