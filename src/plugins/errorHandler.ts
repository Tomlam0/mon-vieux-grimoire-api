import { FastifyPluginAsync, FastifyRequest, FastifyReply, FastifyError } from 'fastify';
import fastifySensible from '@fastify/sensible';
import { ZodError } from 'zod';
import { fromZodError } from 'zod-validation-error';
import fp from 'fastify-plugin';

const errorHandler: FastifyPluginAsync = async (app) => {
  // Register fastify-sensible to add useful error utilities
  await app.register(fastifySensible);

  app.setErrorHandler((error: FastifyError, req: FastifyRequest, res: FastifyReply) => {
    // Handle rate limit error
    if (error.statusCode === 429) {
      res.send(
        app.httpErrors.tooManyRequests(
          'You have reached the request limit! Please try again in 1 minute.'
        )
      );
      return;
    }

    // Handle Zod validation errors
    if (error instanceof ZodError) {
      const formattedError = fromZodError(error);
      res.status(400).send({
        error: 'Validation error',
        message: formattedError.message,
        details: formattedError.details,
      });
      return;
    }

    // Handle all other errors
    app.log.error(error);
    res.status(500).send({
      statusCode: 500,
      error: 'Internal Server Error',
      message: 'An error occurred on the server.',
      details: error.message,
    });
  });
};

export default fp(errorHandler);
