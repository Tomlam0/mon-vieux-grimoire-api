import { FastifyInstance } from 'fastify';

import { LoginBodySchema, LoginResponseSchema } from '@/schema/user/index';
import { login } from '@/controllers/user/index';
import { userRateLimitOptions } from '@/config/ratelimit.config';
import { ERROR401 } from '@/constants/response.constants';

export async function loginRoute(app: FastifyInstance) {
  /**
   * ========================================
   *            Login route
   * ========================================
   */
  app.post('/login', {
    // Openapi doc
    schema: {
      tags: ['User'],
      summary: 'Authenticate user and generate authToken in cookie',

      body: LoginBodySchema,

      response: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: LoginResponseSchema,
            },
          },
        },
        401: ERROR401('Invalid email or password. Please try again.'),
      },
    },

    handler: login,

    config: {
      rateLimit: userRateLimitOptions.login,
    },
  });
}
