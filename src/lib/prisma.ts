import { PrismaClient } from '@prisma/client';

// Singleton pattern: Global declaration to avoid multiple instances in the development environment
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma; // Store the instance in a global variable during development
}

prisma.$connect().catch((error) => {
  process.stderr.write(`Failed to connect to the database: ${error}\n`);
  process.exit(1);
});

export default prisma;
