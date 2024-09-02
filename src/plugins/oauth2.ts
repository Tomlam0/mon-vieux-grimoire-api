import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import oauthPlugin from '@fastify/oauth2';

const oauth2Plugin: FastifyPluginAsync = async (app) => {
  app.register(oauthPlugin, {
    name: 'googleOAuth2',
    scope: ['profile', 'email'],
    credentials: {
      client: {
        id: process.env.GOOGLE_CLIENT_ID!,
        secret: process.env.GOOGLE_CLIENT_SECRET!,
      },
      auth: oauthPlugin.GOOGLE_CONFIGURATION,
    },

    startRedirectPath: '/login/google',
    callbackUri: `${process.env.ORIGIN}/login/google/callback`,
  });
};

export default fp(oauth2Plugin);
