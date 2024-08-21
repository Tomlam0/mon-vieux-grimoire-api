import { FastifyInstance } from 'fastify';

import { SignupSchema, SignupResponseSchema } from '@/schema/user/index';
import { signup } from '@/controllers/user/index';
import { userRateLimitOptions } from '@/config/ratelimit.config';
import { ERROR400 } from '@/constants/response.constants';

export async function signupRoute(app: FastifyInstance) {
  /**
   * ========================================
   *            Signup route
   * ========================================
   */
  app.post('/signup', {
    // Openapi doc
    schema: {
      tags: ['User'],
      summary: 'Create a new user account in database',

      body: SignupSchema,

      response: {
        201: {
          description: 'Created',
          content: {
            'application/json': {
              schema: SignupResponseSchema,
            },
          },
        },
        400: ERROR400('Invalid credentials or account already exists.'),
      },
    },

    handler: signup,

    config: {
      rateLimit: userRateLimitOptions.signup,
    },
  });
}
