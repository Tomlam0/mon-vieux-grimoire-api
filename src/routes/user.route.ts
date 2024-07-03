import { FastifyInstance } from "fastify";

import { signup, login } from "@controllers/user.controller";
import { signupSchema, loginSchema } from "@schema/user.schema";
import { userRateLimitOptions } from "@config/ratelimit.config";

export default async function userRoutes(app: FastifyInstance) {
  // Create a new user account
  app.post("/signup", {
    schema: {
      body: signupSchema.shape.body,
    },
    handler: signup,
    config: {
      rateLimit: userRateLimitOptions.signup,
    },
  });

  // Log to an user account
  app.post("/login", {
    schema: {
      body: loginSchema.shape.body,
    },
    handler: login,
    config: {
      rateLimit: userRateLimitOptions.login,
    },
  });
}
