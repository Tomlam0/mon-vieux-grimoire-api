import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookUncheckedCreateNestedManyWithoutUserInputSchema } from './BookUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutRatingsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutRatingsInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  password: z.string(),
  books: z.lazy(() => BookUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutRatingsInputSchema;
