import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

/*
 * Prisma Singleton Plugin for Fastify
 * ------------------------------------
 * This plugin ensures that a single instance of PrismaClient is used throughout the application,
 * even during frequent server restarts in development (e.g., with Nodemon).
 * The instance is stored globally to persist across restarts, avoiding unnecessary
 * connection/disconnection cycles that could impact database performance.
 * The `onClose` hook ensures Prisma disconnects cleanly when the server stops.
 */
const prismaClientSingleton = () => {
  if (process.env.NODE_ENV === 'production') {
    // Configure Neon to use WebSockets for better performance in serverless environments production
    neonConfig.webSocketConstructor = ws;
    const connectionString = process.env.DATABASE_URL!;

    // Set up a connection pool and create a Prisma adapter for Neon in production
    const pool = new Pool({ connectionString });
    const adapter = new PrismaNeon(pool);
    return new PrismaClient({ adapter });
  }

  // For local developpement
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;

const prismaPlugin: FastifyPluginAsync = async (app) => {
  app.decorate('prisma', prisma);

  app.addHook('onClose', async (server) => {
    await server.prisma.$disconnect();
  });
};

export default fp(prismaPlugin);
