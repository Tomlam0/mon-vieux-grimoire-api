import { PrismaClient } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import loggerConfig from '@config/logger.config';

const prisma = new PrismaClient();

prisma.$connect().catch((error) => {
  const logger = loggerConfig as FastifyInstance['log'];
  logger.error('Failed to connect to the database:', error);
  process.exit(1);
});

export default prisma;
