import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserUncheckedCreateWithoutBooksInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutBooksInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  password: z.string()
}).strict();

export default UserUncheckedCreateWithoutBooksInputSchema;
