import { FastifyInstance } from 'fastify';

import { oauthGoogle, oauthGoogleCallback } from '@/controllers/user/oauthGoogle.controller';
import { userRateLimitOptions } from '@/config/ratelimit.config';

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
    
    config: {
      rateLimit: userRateLimitOptions.login,
    },
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
