import { FastifyInstance } from 'fastify';

import { logout } from '@/controllers/user/index';
import { SUCCESS200, ERROR401 } from '@/constants/response.constants';

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
        200: SUCCESS200('Logout successful'),
        401: ERROR401('Access denied. Please log in.'),
      },
    },

    handler: logout,
  });
}
