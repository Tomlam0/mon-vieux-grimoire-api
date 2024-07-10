import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutBooksInputSchema } from './UserCreateWithoutBooksInputSchema';
import { UserUncheckedCreateWithoutBooksInputSchema } from './UserUncheckedCreateWithoutBooksInputSchema';
import { UserCreateOrConnectWithoutBooksInputSchema } from './UserCreateOrConnectWithoutBooksInputSchema';
import { UserUpsertWithoutBooksInputSchema } from './UserUpsertWithoutBooksInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutBooksInputSchema } from './UserUpdateToOneWithWhereWithoutBooksInputSchema';
import { UserUpdateWithoutBooksInputSchema } from './UserUpdateWithoutBooksInputSchema';
import { UserUncheckedUpdateWithoutBooksInputSchema } from './UserUncheckedUpdateWithoutBooksInputSchema';

export const UserUpdateOneRequiredWithoutBooksNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBooksNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBooksInputSchema),z.lazy(() => UserUncheckedCreateWithoutBooksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBooksInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBooksInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutBooksInputSchema),z.lazy(() => UserUpdateWithoutBooksInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBooksInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutBooksNestedInputSchema;
