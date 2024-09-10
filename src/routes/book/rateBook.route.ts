import { FastifyInstance } from 'fastify';

import { rateBook } from '@/controllers/book/index';
import { RatingSchema } from '@/schema/book/rating.schema';
import { ERROR404, ERROR403 } from '@/constants/response.constants';

export async function rateBookRoute(app: FastifyInstance) {
  /**
   * ========================================
   *        Add a new rating
   * ========================================
   */
  app.post('/:id/rating', {
    preValidation: [app.auth],

    // Openapi doc
    schema: {
      tags: ['Book'],
      summary:
        'Allow authenticated users to rate a book based on its id with a rating between 1 and 5 stars',

      security: [{ authToken: [] }],

      body: RatingSchema,

      response: {
        200: {
          description: 'Rating added successfully',
          content: {
            'application/json': {
              schema: RatingSchema,
            },
          },
        },
        404: ERROR404('Book not found'),
        403: ERROR403('You have already rated this book'),
      },
    },

    handler: rateBook,
  });
}
