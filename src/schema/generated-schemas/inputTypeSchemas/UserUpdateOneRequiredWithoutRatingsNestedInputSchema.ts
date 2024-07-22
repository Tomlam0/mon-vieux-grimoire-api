import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutRatingsInputSchema } from './UserCreateWithoutRatingsInputSchema';
import { UserUncheckedCreateWithoutRatingsInputSchema } from './UserUncheckedCreateWithoutRatingsInputSchema';
import { UserCreateOrConnectWithoutRatingsInputSchema } from './UserCreateOrConnectWithoutRatingsInputSchema';
import { UserUpsertWithoutRatingsInputSchema } from './UserUpsertWithoutRatingsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutRatingsInputSchema } from './UserUpdateToOneWithWhereWithoutRatingsInputSchema';
import { UserUpdateWithoutRatingsInputSchema } from './UserUpdateWithoutRatingsInputSchema';
import { UserUncheckedUpdateWithoutRatingsInputSchema } from './UserUncheckedUpdateWithoutRatingsInputSchema';

export const UserUpdateOneRequiredWithoutRatingsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutRatingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutRatingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutRatingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRatingsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutRatingsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutRatingsInputSchema),z.lazy(() => UserUpdateWithoutRatingsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRatingsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutRatingsNestedInputSchema;
