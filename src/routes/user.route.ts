import { FastifyInstance } from "fastify";
import { signup, login } from "@controllers/user.controller";

const userRoutes = async (app: FastifyInstance) => {
  app.post("/signup", signup);

  app.post("/login", login);
};

export default userRoutes;
