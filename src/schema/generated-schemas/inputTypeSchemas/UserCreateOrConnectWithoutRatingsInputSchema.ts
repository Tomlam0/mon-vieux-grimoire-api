import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutRatingsInputSchema } from './UserCreateWithoutRatingsInputSchema';
import { UserUncheckedCreateWithoutRatingsInputSchema } from './UserUncheckedCreateWithoutRatingsInputSchema';

export const UserCreateOrConnectWithoutRatingsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutRatingsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutRatingsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutRatingsInputSchema),
      ]),
    })
    .strict();

export default UserCreateOrConnectWithoutRatingsInputSchema;
