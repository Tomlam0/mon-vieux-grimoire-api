import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutRatingsInputSchema } from './UserUpdateWithoutRatingsInputSchema';
import { UserUncheckedUpdateWithoutRatingsInputSchema } from './UserUncheckedUpdateWithoutRatingsInputSchema';

export const UserUpdateToOneWithWhereWithoutRatingsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRatingsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => UserUpdateWithoutRatingsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutRatingsInputSchema),
      ]),
    })
    .strict();

export default UserUpdateToOneWithWhereWithoutRatingsInputSchema;
