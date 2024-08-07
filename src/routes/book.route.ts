import { FastifyInstance } from 'fastify';

import {
  getAllBooks,
  getOneBook,
  getBestBooks,
  rateBook,
  createBook,
  updateBook,
  deleteBook,
} from '@controllers/book/index.book';
import { BookSchema, BookArraySchema } from '@schema/book.schema';

const bookRoutes = async (app: FastifyInstance) => {
  /**
   * ========================================
   *        Display all books
   * ========================================
   */
  app.get('/', {
    schema: {
      tags: ['Book'],
      response: {
        200: BookArraySchema,
      },
    },
    handler: getAllBooks,
  });

  /**
   * ========================================
   *        Display a specific book
   * ========================================
   */
  app.get('/:id', {
    schema: {
      tags: ['Book'],
      response: {
        200: BookSchema,
      },
    },
    handler: getOneBook,
  });

  /**
   * ========================================
   *        Display the 3 best books
   * ========================================
   */
  app.get('/bestrating', {
    schema: {
      tags: ['Book'],
      response: {
        200: BookArraySchema,
      },
    },
    handler: getBestBooks,
  });

  /**
   * ========================================
   *        Add a new book
   * ========================================
   */
  app.post('/', {
    preValidation: [app.auth],
    schema: {
      tags: ['Book'],
      body: BookSchema,
    },
    handler: createBook,
  });

  /**
   * ========================================
   *        Add a new rating
   * ========================================
   */
  app.post('/:id/rating', {
    preValidation: [app.auth],
    schema: {
      tags: ['Book'],
      body: BookSchema,
    },
    handler: rateBook,
  });

  /**
   * ========================================
   *        Modify book informations
   * ========================================
   */
  app.put('/:id', {
    preValidation: [app.auth],
    schema: {
      tags: ['Book'],
      body: BookSchema,
    },
    handler: updateBook,
  });

  /**
   * ========================================
   *        Delete a book
   * ========================================
   */
  app.delete('/:id', {
    preValidation: [app.auth],
    schema: {
      tags: ['Book'],
      body: BookSchema,
    },
    handler: deleteBook,
  });
};

export default bookRoutes;
