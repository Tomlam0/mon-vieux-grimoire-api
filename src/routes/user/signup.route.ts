import { FastifyInstance } from 'fastify';

import { SignupSchema } from '@schema/user/index';
import { ERROR400, ERROR500 } from '@constants/response.constants';
import { signup } from '@controllers/user/index';
import { userRateLimitOptions } from '@config/ratelimit.config';

export async function signupRoute(app: FastifyInstance) {
  /**
   * ========================================
   *            Signup route
   * ========================================
   */
  app.post('/signup', {
    schema: {
      tags: ['User'],
      summary: 'Create a new user account in database',

      body: SignupSchema,

      response: {
        201: {
          description: 'Created',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'Utilisateur créé !' },
                },
              },
            },
          },
        },
        400: ERROR400,
        500: ERROR500,
      },
    },

    handler: signup,

    config: {
      rateLimit: userRateLimitOptions.signup,
    },
  });
}
