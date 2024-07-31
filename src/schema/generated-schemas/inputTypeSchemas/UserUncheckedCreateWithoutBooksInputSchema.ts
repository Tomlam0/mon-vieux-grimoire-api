import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RatingUncheckedCreateNestedManyWithoutUserInputSchema } from './RatingUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutBooksInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutBooksInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      password: z.string(),
      ratings: z.lazy(() => RatingUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
    })
    .strict();

export default UserUncheckedCreateWithoutBooksInputSchema;
