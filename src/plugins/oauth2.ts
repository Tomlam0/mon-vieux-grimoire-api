import { FastifyPluginAsync } from 'fastify';
import oauthPlugin from '@fastify/oauth2';

import { SUCCESS302 } from '@/constants/response.constants';
import { googleCallbackRoute } from '@/routes/user/oauthGoogle.route';

const oauth2Plugin: FastifyPluginAsync = async (app) => {
  app.register(oauthPlugin, {
    name: 'googleOAuth2',
    scope: ['profile', 'email'],
    credentials: {
      client: {
        id: process.env.GOOGLE_CLIENT_ID!,
        secret: process.env.GOOGLE_CLIENT_SECRET!,
      },
    },

    // Used to extract user informations
    discovery: {
      issuer: 'https://accounts.google.com',
    },

    startRedirectPath: '/api/auth/login/google',
    callbackUri: `${process.env.ORIGIN}/api/auth/login/google/callback`,

    // Openapi doc for startRedirectPath
    schema: {
      tags: ['User'],
      summary: 'Initiates Google OAuth2 authentication page',
      response: {
        302: SUCCESS302('Redirection to Google OAuth2 for authentication.'),
      },
    },
  });

  await googleCallbackRoute(app);
};

export default oauth2Plugin;
