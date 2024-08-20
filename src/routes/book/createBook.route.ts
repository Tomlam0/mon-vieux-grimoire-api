import { FastifyInstance } from 'fastify';

import { createBook } from '@/controllers/book/index';
import { userRateLimitOptions } from '@/config/ratelimit.config';
import { BookResponseSchema } from '@/schema/book/book.schema';

export async function createBookRoute(app: FastifyInstance) {
  /**
   * ========================================
   *        Add a new book route
   * ========================================
   */
  app.post('/', {
    preValidation: [app.auth],

    // Openapi doc
    schema: {
      tags: ['Book'],
      summary: 'Allow an authenticate user to add a new book',

      security: [{ authToken: [] }],

      consumes: ['multipart/form-data'],
      description: `
        This endpoint expects a multipart/form-data request because the book details and an image file need to be uploaded together.

        The creation of a new book involves not just text data but also the upload of an image file.
        Since Fastify, combined with Zod, enforces strict validation of request data, using multipart/form-data allows us to handle both the text fields and the binary image data in a single request.

        The image file will be uploaded to Amazon S3, and the resulting URL will be stored in the database alongside the other book details.

        Request Fields:
        - **title** (string, unique, required): The title of the book.
        - **author** (string, required): The author of the book.
        - **genre** (string, required): The genre of the book.
        - **year** (integer, required): The publication year of the book.
        - **ratings[0][grade]** (integer, required): The initial rating of the book.
        - **file** (binary, required): The image file of the book.
      `,

      response: {
        201: {
          description: 'Created',
          content: {
            'application/json': {
              schema: BookResponseSchema,
            },
          },
        },
      },
    },

    handler: createBook,

    config: {
      rateLimit: userRateLimitOptions.addBook,
    },
  });
}
