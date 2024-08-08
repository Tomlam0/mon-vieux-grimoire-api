import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import fastifyBasicAuth from '@fastify/basic-auth';
import {
  fastifyZodOpenApiPlugin,
  fastifyZodOpenApiTransform,
  fastifyZodOpenApiTransformObject,
} from 'fastify-zod-openapi';
import { type ZodOpenApiVersion } from 'zod-openapi';

const initSwagger = async (app: FastifyInstance) => {
  if (process.env.ENABLE_SWAGGER === 'true') {
    /**
     * ========================================
     *   Auth config for swagger ui access security
     * ========================================
     */
    // app.register(fastifyBasicAuth, {
    //   validate: async (
    //     username: string,
    //     password: string,
    //     req: FastifyRequest,
    //     res: FastifyReply
    //   ) => {
    //     if (
    //       username !== process.env.SWAGGER_UI_USERNAME ||
    //       password !== process.env.SWAGGER_UI_PASSWORD
    //     ) {
    //       res.code(401).send({ message: 'Unauthorized' });
    //     }
    //   },
    //   authenticate: true,
    // });

    /**
     * ========================================
     *            Main Swagger config
     * ========================================
     */
    const openapi: ZodOpenApiVersion = '3.0.0';
    await app.register(fastifyZodOpenApiPlugin, { openapi });
    await app.register(fastifySwagger, {
      openapi: {
        info: {
          title: 'Mon Vieux Grimoire API',
          description: `
            API Documentation for Mon Vieux Grimoire.
            
            **Note**: Cookie authentication is currently not supported for "Try it out" requests due to browser security restrictions. 
            Please use tools like Postman for testing endpoints that require cookie authentication.
          `,
          version: '1.0.0',
        },

        tags: [
          {
            name: 'User',
            description:
              'Operations related to user management, including user registration, authentication and deconnexion.',
          },
          {
            name: 'Book',
            description:
              'Operations related to book management, including adding new books, retrieving book details, updating book information, and deleting books.',
          },
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

        openapi,
      },
      transform: fastifyZodOpenApiTransform,
      transformObject: fastifyZodOpenApiTransformObject,
    });

    /**
     * ========================================
     *            Swagger UI config
     * ========================================
     */
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
