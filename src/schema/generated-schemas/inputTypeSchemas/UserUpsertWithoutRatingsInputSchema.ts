import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutRatingsInputSchema } from './UserUpdateWithoutRatingsInputSchema';
import { UserUncheckedUpdateWithoutRatingsInputSchema } from './UserUncheckedUpdateWithoutRatingsInputSchema';
import { UserCreateWithoutRatingsInputSchema } from './UserCreateWithoutRatingsInputSchema';
import { UserUncheckedCreateWithoutRatingsInputSchema } from './UserUncheckedCreateWithoutRatingsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutRatingsInputSchema: z.ZodType<Prisma.UserUpsertWithoutRatingsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutRatingsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRatingsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutRatingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutRatingsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutRatingsInputSchema;
