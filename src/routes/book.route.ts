import { FastifyInstance } from "fastify";
import {
  getAllBooks,
  getOneBook,
  getBestBooks,
  rateBook,
  createBook,
  updateBook,
  deleteBook,
} from "@controllers/book/index.book";
import { bookSchema, bookArraySchema } from "@schema/book.schema";

const bookRoutes = async (app: FastifyInstance) => {
  /**
   * ========================================
   *        Display all books
   * ========================================
   */
  app.get("/", {
    schema: {
      response: {
        200: bookArraySchema,
      },
    },
    handler: getAllBooks,
  });

  /**
   * ========================================
   *        Display a specific book
   * ========================================
   */
  app.get("/:id", {
    schema: {
      response: {
        200: bookSchema,
      },
    },
    handler: getOneBook,
  });

  /**
   * ========================================
   *        Display the 3 best books
   * ========================================
   */
  app.get("/bestrating", {
    schema: {
      response: {
        200: bookArraySchema,
      },
    },
    handler: getBestBooks,
  });

  /**
   * ========================================
   *        Add a new book
   * ========================================
   */
  app.post("/", { preValidation: [app.auth] }, createBook);

  /**
   * ========================================
   *        Add a new rating
   * ========================================
   */
  app.post("/:id/rating", { preValidation: [app.auth] }, rateBook);

  /**
   * ========================================
   *        Modify book informations
   * ========================================
   */
  app.put("/:id", { preValidation: [app.auth] }, updateBook);

  /**
   * ========================================
   *        Delete a book
   * ========================================
   */
  app.delete("/:id", { preValidation: [app.auth] }, deleteBook);
};

export default bookRoutes;
