import { FastifyInstance } from 'fastify';

import { oauthGoogle, oauthGoogleCallback } from '@/controllers/user/oauthGoogle.controller';

export const oauthgoogleRoute = async (app: FastifyInstance) => {
  /**
   * ========================================
   *       Google Oauth login route
   * ========================================
   */
  app.get('/login/google', {
    // Openapi doc
    schema: {
      tags: [''],
      summary: '',
    },

    handler: oauthGoogle,
  });
};

export const oauthGoogleCallbackRoute = async (app: FastifyInstance) => {
  /**
   * ========================================
   *     Google Oauth login callback route
   * ========================================
   */
  app.get('/login/google/callback', {
    // Openapi doc
    schema: {
      tags: [''],
      summary: '',
    },

    handler: oauthGoogleCallback,
  });
};
