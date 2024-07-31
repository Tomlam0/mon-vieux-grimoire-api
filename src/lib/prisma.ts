import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

prisma.$connect().catch((e) => {
  console.error('Failed to connect to the database:', e);
  process.exit(1);
});

export default prisma;
