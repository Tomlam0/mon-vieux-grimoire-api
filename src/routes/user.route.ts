import { FastifyInstance } from 'fastify';

import { signup, login, logout } from '@controllers/user/index.user';
import { SignupSchema, LoginSchema } from '@schema/user.schema';
import { userRateLimitOptions } from '@config/ratelimit.config';

export default async function userRoutes(app: FastifyInstance) {
  /**
   * ========================================
   *            Signup Route
   * ========================================
   */
  app.post('/signup', {
    schema: {
      body: SignupSchema,
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
  app.post('/login', {
    schema: {
      body: LoginSchema,
    },
    handler: login,
    config: {
      rateLimit: userRateLimitOptions.login,
    },
  });

  // JWT is set on a cookie so we need to delete the cookie from backend on user logout
  /**
   * ========================================
   *            Logout Route
   * ========================================
   */
  app.post('/logout', {
    preValidation: [app.auth],
    handler: logout,
  });
}
