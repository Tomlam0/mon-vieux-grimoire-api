import { FastifyInstance } from "fastify";

import { signup, login } from "@controllers/user.controller";
import { signupSchema, loginSchema } from "@schema/user.schema";
import { userRateLimitOptions } from "@config/ratelimit.config";

export default async function userRoutes(app: FastifyInstance) {
  /**
   * ========================================
   *            Signup Route
   * ========================================
   */
  app.post("/signup", {
    schema: {
      body: signupSchema.shape.body,
    },
    handler: signup,
    config: {
      rateLimit: userRateLimitOptions.signup,
    },
  });

  /**
   * ========================================
   *            Login Route
   * ========================================
   */
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
