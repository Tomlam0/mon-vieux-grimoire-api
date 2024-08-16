import { FastifyEnvOptions } from '@fastify/env';
import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

const envSchema = z.object({
  PORT: z.number().default(4000),
  DATABASE_URL: z.string(),
  ORIGIN: z.string(),
  CREDENTIALS: z.boolean(),
  JWT_SECRET_KEY: z.string(),
  COOKIE_SECRET: z.string(),
  AWS_REGION: z.string(),
  AWS_BUCKET_NAME: z.string(),
  AWS_ACCESS_KEY_ID: z.string(),
  AWS_SECRET_ACCESS_KEY: z.string(),
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
