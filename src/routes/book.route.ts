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
  app.get("/", getAllBooks);

  app.get("/:id", getOneBook);

  app.get("/bestrating", getBestBook);

  app.post("/:id/rating", { preValidation: [app.auth] }, rateBook);

  app.post("/", { preValidation: [app.auth] }, createBook);

  app.put("/:id", { preValidation: [app.auth] }, updateBook);

  app.delete("/:id", { preValidation: [app.auth] }, deleteBook);
};

export default bookRoutes;
