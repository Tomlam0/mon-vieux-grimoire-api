import { FastifyInstance } from 'fastify';

import { rateBook } from '@controllers/book/index';
import { BookSchema } from '@/schema/book/book.schema';

export async function rateBookRoute(app: FastifyInstance) {
  /**
   * ========================================
   *        Add a new rating
   * ========================================
   */
  app.post('/:id/rating', {
    preValidation: [app.auth],

    schema: {
      tags: ['Book'],
      summary:
        'Allow authenticated users to rate any book based on its id with a rating between 0 and 5 stars',

      security: [{ authToken: [] }],

      body: BookSchema,
    },

    handler: rateBook,
  });
}
