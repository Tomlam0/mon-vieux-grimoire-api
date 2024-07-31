import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutBooksInputSchema } from './UserUpdateWithoutBooksInputSchema';
import { UserUncheckedUpdateWithoutBooksInputSchema } from './UserUncheckedUpdateWithoutBooksInputSchema';
import { UserCreateWithoutBooksInputSchema } from './UserCreateWithoutBooksInputSchema';
import { UserUncheckedCreateWithoutBooksInputSchema } from './UserUncheckedCreateWithoutBooksInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutBooksInputSchema: z.ZodType<Prisma.UserUpsertWithoutBooksInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutBooksInputSchema),
      z.lazy(() => UserUncheckedUpdateWithoutBooksInputSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutBooksInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutBooksInputSchema),
    ]),
    where: z.lazy(() => UserWhereInputSchema).optional(),
  })
  .strict();

export default UserUpsertWithoutBooksInputSchema;
