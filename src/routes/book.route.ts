import { FastifyInstance } from "fastify";
import {
  getAllBooks,
  getOneBook,
  getBestBook,
  rateBook,
  createBook,
  updateBook,
  deleteBook,
} from "@controllers/book.controller";

const bookRoutes = async (app: FastifyInstance) => {
  /**
   * ========================================
   *        Display books
   * ========================================
   */

  // Display all books
  app.get("/", getAllBooks);

  // Display specific book
  app.get("/:id", getOneBook);

  // Display only best books
  app.get("/bestrating", getBestBook);

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
