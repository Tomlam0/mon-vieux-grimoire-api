import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import fastifyBasicAuth from '@fastify/basic-auth';

const initSwagger = async (app: FastifyInstance) => {
  if (process.env.ENABLE_SWAGGER === 'true') {
    // Auhtentification configuration for swagger ui access security
    app.register(fastifyBasicAuth, {
      validate: async (
        username: string,
        password: string,
        req: FastifyRequest,
        res: FastifyReply
      ) => {
        if (
          username !== process.env.SWAGGER_UI_USERNAME ||
          password !== process.env.SWAGGER_UI_PASSWORD
        ) {
          res.code(401).send({ message: 'Unauthorized' });
        }
      },
      authenticate: true,
    });

    // Main Swagger config
    await app.register(fastifySwagger, {
      openapi: {
        info: {
          title: 'Mon Vieux Grimoire API',
          description: 'API Documentation for Mon Vieux Grimoire',
          version: '1.0.0',
        },

        tags: [
          { name: 'User', description: 'User end-points' },
          { name: 'Book', description: 'Book end-points' },
        ],

        servers: [
          {
            url: 'http://localhost:4000',
            description: 'Development server',
          },
        ],

        components: {
          // Define the security scheme using cookies for authentication
          securitySchemes: {
            authToken: {
              type: 'apiKey',
              in: 'cookie',
              name: 'authToken',
            },
          },
        },

        // Apply the authToken security scheme to all endpoints
        security: [{ authToken: [] }],
      },
    });

    // Swagger UI
    await app.register(fastifySwaggerUi, {
      uiHooks: {
        // Check for auth
        onRequest: app.basicAuth,
      },

      routePrefix: '/api/docs',

      // Protect against XSS attack
      staticCSP: true,

      transformStaticCSP: (header) => header,

      // Expand tag sections by default and cancel endpoints deeplinks
      uiConfig: {
        docExpansion: 'list',
        deepLinking: false,
      },
    });
  }
};

export default fp(initSwagger);
