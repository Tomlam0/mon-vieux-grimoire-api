import { FastifyInstance } from 'fastify';

import { deleteBook } from '@/controllers/book/index';
import { BookSchema } from '@/schema/book/book.schema';

export async function deleteBookRoute(app: FastifyInstance) {
  /**
   * ========================================
   *        Delete a book
   * ========================================
   */
  app.delete('/:id', {
    preValidation: [app.auth],

    schema: {
      tags: ['Book'],
      summary: 'Allows only the user who added the book to delete it based on its id.',

      security: [{ authToken: [] }],

      body: BookSchema,
    },

    handler: deleteBook,
  });
}
