import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import { S3Client } from '@aws-sdk/client-s3';

const s3Plugin: FastifyPluginAsync = async (app) => {
  const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });

  app.decorate('s3', s3);
};

export default fp(s3Plugin);
