import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutBooksInputSchema } from './UserCreateWithoutBooksInputSchema';
import { UserUncheckedCreateWithoutBooksInputSchema } from './UserUncheckedCreateWithoutBooksInputSchema';

export const UserCreateOrConnectWithoutBooksInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBooksInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutBooksInputSchema),z.lazy(() => UserUncheckedCreateWithoutBooksInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutBooksInputSchema;
