import Fastify, { FastifyError, FastifyInstance } from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";
import { fromError } from "zod-validation-error";
import fastifyEnv from "@fastify/env";
import fastifyHelmet from "@fastify/helmet";
import fastifyCors from "@fastify/cors";
import fastifyCompress from "@fastify/compress";
import rateLimit from "@fastify/rate-limit";
// import fastifySwagger from "@fastify/swagger";
// import fastifySwaggerUi from "@fastify/swagger-ui";

import dotenv from "dotenv";
import path from "path";

import envConfig from "@config/env.config";
import corsConfig from "@config/cors.config";
import loggerConfig from "@config/logger.config";
// import { swaggerConfig } from "@config/swagger.config";

import bookRoutes from "@routes/book.route";
import userRoutes from "@routes/user.route";

// Check if in development or production mode with .env files
const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

/**
 * ========================================
 *            App
 * ========================================
 */
const main = async (): Promise<FastifyInstance> => {
  const app = Fastify({
    logger: loggerConfig,
  }).withTypeProvider<ZodTypeProvider>();

  // Configure zod type provider
  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  // Register plugins in order
  await app.register(fastifyEnv, envConfig);
  await app.register(fastifyHelmet, { global: true }); // Security applied on all routes
  await app.register(fastifyCors, corsConfig);
  await app.register(fastifyCompress);
  await app.register(rateLimit, {
    max: 100,
    timeWindow: "1 minute",
  }); // Register global rate limit for bots and DDoS protection

  // Register API routes
  app.register(bookRoutes, { prefix: "/api/books" });
  app.register(userRoutes, { prefix: "/api/auth" });

  // Global errors handler
  app.setErrorHandler((error: FastifyError, req, res) => {
    // Change message from rate limit error
    if (error.statusCode === 429) {
      res.code(429).send({
        statusCode: 429,
        error: "Trop de requêtes",
        message:
          "Vous avez atteint la limite de requêtes ! Veuillez réessayer dans 1 minute.",
      });
      return;
    }
    // Zod errors handler
    try {
      const validationError = fromError(error);
      res.status(400).send(validationError);
    } catch {
      app.log.error(error);
      res.status(500).send({ error: "Une erreur est survenue" });
    }
  });

  return app;
};

export { main };