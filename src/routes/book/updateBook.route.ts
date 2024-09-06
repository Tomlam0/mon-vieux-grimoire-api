import { FastifyInstance } from 'fastify';

import { updateBook } from '@/controllers/book/index';
import { ERROR404, ERROR403 } from '@/constants/response.constants';
import { CreateBookResponseSchema } from '@/schema/book/book.schema';

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

      consumes: ['multipart/form-data'],
      description: `
      This endpoint expects a multipart/form-data request when an image file needs to be updated, as the update process involves both text data and optionally an image file. 
      If only text fields are being updated (e.g., title, author, genre), a standard application/json request can be used.
    
      The image file, if provided, will be uploaded to Amazon S3, and the resulting URL will be stored in the database alongside the updated book details. If no new image is provided, the existing image will remain unchanged.
    
      Fields:
      - **title** (string, unique, optional): The updated title of the book.
      - **author** (string, optional): The updated author of the book.
      - **genre** (string, optional): The updated genre of the book.
      - **year** (integer, optional): The updated publication year of the book.
      - **ratings[0][grade]** (integer, optional): The updated rating of the book.
      - **file** (binary, optional): The updated image file of the book.
    
      This endpoint supports partial updates, meaning that only the fields that need to be updated should be included in the request. Fields that are not included will remain unchanged in the database.
    `,

      response: {
        200: {
          description: 'Book updated successfully',
          content: {
            'application/json': {
              schema: CreateBookResponseSchema,
            },
          },
        },
        404: ERROR404('Book not found'),
        403: ERROR403('You are not authorized to update this book'),
      },
    },

    handler: updateBook,
  });
}
