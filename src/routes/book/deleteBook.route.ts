import { FastifyInstance } from 'fastify';

import { deleteBook } from '@/controllers/book/index';
import { SUCCESS200, ERROR404, ERROR403 } from '@/constants/response.constants';

export async function deleteBookRoute(app: FastifyInstance) {
  /**
   * ========================================
   *        Delete a book
   * ========================================
   */
  app.delete('/:id', {
    preValidation: [app.auth],

    // Openapi doc
    schema: {
      tags: ['Book'],
      summary: 'Allows only the user who added the book to delete it based on its id.',

      security: [{ authToken: [] }],

      response: {
        200: SUCCESS200('Book successfully deleted'),
        404: ERROR404('Book not found'),
        403: ERROR403('You are not authorized to delete this book'),
      },
    },

    handler: deleteBook,
  });
}
