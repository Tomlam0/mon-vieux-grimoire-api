import { FastifyInstance } from "fastify";
import { signup, login } from "@controllers/user.controller";
import { signupSchema, loginSchema } from "@schema/user.schema";

const userRoutes = async (app: FastifyInstance) => {
  // Create a new user account
  app.post("/signup", {
    schema: signupSchema,
    handler: signup,
  });

  // Log to an user account
  app.post("/login", {
    schema: loginSchema,
    handler: login,
  });
};

export default userRoutes;
