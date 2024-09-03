import { FastifyInstance } from 'fastify';

import { oauthGoogleCallback } from '@/controllers/user/oauthGoogle.controller';
import { LoginResponseSchema } from '@/schema/user/index';

export const googleCallbackRoute = async (app: FastifyInstance) => {
  /**
   * ========================================
   *     Google Oauth login callback route
   *
   *     This route is registered in oauth2 plugin directly
   * ========================================
   */
  app.get('/api/auth/login/google/callback', {
    // Openapi doc
    schema: {
      tags: ['User'],
      summary: 'Handles the callback from Google OAuth2 and generate authToken in cookie',
      
      response: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: LoginResponseSchema,
            },
          },
        },
      },
    },

    handler: oauthGoogleCallback,
  });
};
