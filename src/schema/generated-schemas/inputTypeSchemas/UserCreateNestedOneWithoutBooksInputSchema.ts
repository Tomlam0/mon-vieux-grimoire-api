import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutBooksInputSchema } from './UserCreateWithoutBooksInputSchema';
import { UserUncheckedCreateWithoutBooksInputSchema } from './UserUncheckedCreateWithoutBooksInputSchema';
import { UserCreateOrConnectWithoutBooksInputSchema } from './UserCreateOrConnectWithoutBooksInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutBooksInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBooksInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutBooksInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutBooksInputSchema),
        ])
        .optional(),
      connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBooksInputSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    })
    .strict();

export default UserCreateNestedOneWithoutBooksInputSchema;
