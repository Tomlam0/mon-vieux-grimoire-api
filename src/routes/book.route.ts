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

  app.post("/:id/rating", rateBook);

  app.post("/", createBook);

  app.put("/:id", updateBook);

  app.delete("/:id", deleteBook);
};

export default bookRoutes;
