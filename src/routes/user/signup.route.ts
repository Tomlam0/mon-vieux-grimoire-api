import { FastifyInstance } from 'fastify';

import { SignupSchema } from '@/schema/user/index';
import { signup } from '@/controllers/user/index';
import { SUCCESS201, ERROR400 } from '@/constants/response.constants';
import { userRateLimitOptions } from '@/config/ratelimit.config';

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
      summary: 'Create a new user account and send email confirmation',

      body: SignupSchema,

      response: {
        201: SUCCESS201(
          'A confirmation email has been sent. Please check your email to confirm your account.'
        ),
        400: ERROR400('Invalid credentials or account already exists.'),
      },
    },

    handler: signup,

    config: {
      rateLimit: userRateLimitOptions.signup,
    },
  });
}
