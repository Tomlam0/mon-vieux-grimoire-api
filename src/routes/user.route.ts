import { FastifyInstance } from 'fastify';

import { SignupSchema, LoginSchema } from '@schema/user.schema';
import { signup, login, logout } from '@controllers/user/index.user';
import { userRateLimitOptions } from '@config/ratelimit.config';

export default async function userRoutes(app: FastifyInstance) {
  /**
   * ========================================
   *            Signup Route
   * ========================================
   */
  app.post('/signup', {
    schema: {
      tags: ['User'],
      summary: 'Create a new user account in database',
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
      tags: ['User'],
      summary: 'Authenticate user and generate authToken in cookie',
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

    schema: {
      tags: ['User'],
      summary: 'Disconnect user and delete the cookie',
      security: [{ authToken: [] }],
    },

    handler: logout,
  });
}