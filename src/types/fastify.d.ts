import { PrismaClient } from '@prisma/client';
import { S3Client } from '@aws-sdk/client-s3';
import { EnvSchema } from '@/config/env.config';

declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient;
    s3: S3Client;
    mailer: nodemailer.Transporter;
    googleOAuth2: OAuth2Namespace;
    // Holds configuration values loaded from environment variables.
    config: EnvSchema;
    // auth is used to verify JWT tokens and handle authentication.
    auth: (req: FastifyRequest, res: FastifyReply) => Promise<void>;
  }
}
