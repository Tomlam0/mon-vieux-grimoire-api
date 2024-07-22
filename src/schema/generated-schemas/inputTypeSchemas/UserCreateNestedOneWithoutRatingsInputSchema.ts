import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutRatingsInputSchema } from './UserCreateWithoutRatingsInputSchema';
import { UserUncheckedCreateWithoutRatingsInputSchema } from './UserUncheckedCreateWithoutRatingsInputSchema';
import { UserCreateOrConnectWithoutRatingsInputSchema } from './UserCreateOrConnectWithoutRatingsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutRatingsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutRatingsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutRatingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutRatingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRatingsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutRatingsInputSchema;
