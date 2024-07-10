import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserCreateWithoutBooksInputSchema: z.ZodType<Prisma.UserCreateWithoutBooksInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  password: z.string()
}).strict();

export default UserCreateWithoutBooksInputSchema;
