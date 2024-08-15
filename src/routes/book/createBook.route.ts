import { FastifyInstance } from 'fastify';

import { createBook } from '@/controllers/book/index';
import { userRateLimitOptions } from '@/config/ratelimit.config';
import { BookSchema, BookResponseSchema } from '@/schema/book/book.schema';
import { ERROR400, ERROR500 } from '@/constants/response.constants';

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

      consumes: ['multipart/form-data'],
      body: BookSchema,

      response: {
        201: {
          description: 'Created',
          content: {
            'application/json': {
              schema: BookResponseSchema,
            },
          },
        },
        400: ERROR400,
        500: ERROR500,
      },
    },

    handler: createBook,

    config: {
      rateLimit: userRateLimitOptions.addBook,
    },
  });
}
