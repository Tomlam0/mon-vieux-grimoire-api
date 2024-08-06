import { FastifyEnvOptions } from '@fastify/env';
import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

const envSchema = z.object({
  PORT: z.number().default(4000),
  ORIGIN: z.string(),
  CREDENTIALS: z.boolean(),
  DATABASE_URL: z.string(),
  JWT_SECRET_KEY: z.string(),
  ENABLE_SWAGGER: z.boolean(),
  SWAGGER_UI_USERNAME: z.string().optional(),
  SWAGGER_UI_PASSWORD: z.string().optional(),
});

type EnvSchema = z.infer<typeof envSchema>;

// Convert the Zod schema to JSON Schema format for compatibility with Fastify and ajv
const envJsonSchema = zodToJsonSchema(envSchema, 'envSchema');

const envConfig: FastifyEnvOptions = {
  confKey: 'config',
  schema: envJsonSchema,
  dotenv: true,
};

export { envSchema, EnvSchema, envConfig };
