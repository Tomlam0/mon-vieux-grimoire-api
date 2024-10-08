import Fastify, { FastifyInstance } from 'fastify';
import fastifyEnv from '@fastify/env';
import fastifyHelmet from '@fastify/helmet';
import fastifyCors from '@fastify/cors';
import fastifyCompress from '@fastify/compress';
import rateLimit from '@fastify/rate-limit';
import fastifyCookie from '@fastify/cookie';
import fastifyMultipart from '@fastify/multipart';
import dotenv from 'dotenv';
import path from 'path';

import 'zod-openapi/extend';
import {
  serializerCompiler,
  validatorCompiler,
  type FastifyZodOpenApiTypeProvider,
} from 'fastify-zod-openapi';

import { envConfig } from '@/config/env.config';
import corsConfig from '@/config/cors.config';
import loggerConfig from '@/config/logger.config';
import multipartConfig from '@/config/multipart.config';

import errorHandler from '@/plugins/errorHandler';
import prismaPlugin from '@/plugins/prisma';
import auth from '@/plugins/auth';
import initSwagger from '@/plugins/swagger';
import s3Plugin from '@/plugins/s3';
import nodemailerPlugin from '@/plugins/nodemailer';
import oauth2Plugin from '@/plugins/oauth2';

import bookRoutes from '@/routes/book/index';
import userRoutes from '@/routes/user/index';

// Check if in development or production mode with .env files
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

/**
 * ========================================
 *            App
 * ========================================
 */
const main = async (): Promise<FastifyInstance> => {
  const app = Fastify({
    logger: loggerConfig,
  }).withTypeProvider<FastifyZodOpenApiTypeProvider>();

  // Configure zod type provider
  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  /**
   * ========================================
   *            Plugins in order
   * ========================================
   */
  await app.register(fastifyEnv, envConfig);
  await app.register(fastifyHelmet, { global: true }); // Security applied on all routes
  await app.register(fastifyCors, corsConfig);
  await app.register(rateLimit, {
    max: 100,
    timeWindow: '1 minute',
  }); // Register global rate limit for bots and DDoS protection;
  await app.register(fastifyCookie, {
    secret: process.env.COOKIE_SECRET,
  });
  await app.register(fastifyMultipart, multipartConfig);

  await app.register(prismaPlugin);
  await app.register(auth);
  await app.register(nodemailerPlugin);
  await app.register(initSwagger);
  await app.register(s3Plugin);
  await app.register(errorHandler);
  await app.register(oauth2Plugin);

  /**
   * ========================================
   *            Routes
   * ========================================
   */
  app.register(bookRoutes, { prefix: '/api/books' });
  // Register user routes with compression
  app.register(async () => {
    await app.register(fastifyCompress);
    app.register(userRoutes, { prefix: '/api/auth' });
  });

  return app;
};

export { main };
