import { FastifyInstance } from 'fastify';

import { LogoutResponseSchema } from '@/schema/user/logout.schema';
import { logout } from '@/controllers/user/index';
import { ERROR500 } from '@/constants/response.constants';

export async function logoutRoute(app: FastifyInstance) {
  // JWT is set on a cookie so we need to delete the cookie from backend on user logout
  /**
   * ========================================
   *            Logout route
   * ========================================
   */
  app.post('/logout', {
    preValidation: [app.auth],

    // Openapi doc
    schema: {
      tags: ['User'],
      summary: 'Disconnect user and delete the cookie',

      security: [{ authToken: [] }],

      response: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: LogoutResponseSchema,
            },
          },
        },
        500: ERROR500,
      },
    },

    handler: logout,
  });
}
