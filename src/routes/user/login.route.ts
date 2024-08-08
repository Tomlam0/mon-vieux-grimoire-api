import { FastifyInstance } from 'fastify';

import { LoginBodySchema } from '@schema/user/index';
import { ERROR401, ERROR500 } from '@constants/response.constants';
import { login } from '@controllers/user/index';
import { userRateLimitOptions } from '@config/ratelimit.config';

export async function loginRoute(app: FastifyInstance) {
  /**
   * ========================================
   *            Login route
   * ========================================
   */
  app.post('/login', {
    schema: {
      tags: ['User'],
      summary: 'Authenticate user and generate authToken in cookie',

      body: LoginBodySchema,

      response: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  uderId: { type: 'string', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' },
                },
              },
            },
          },
        },
        401: ERROR401,
        500: ERROR500,
      },
    },

    handler: login,

    config: {
      rateLimit: userRateLimitOptions.login,
    },
  });
}
