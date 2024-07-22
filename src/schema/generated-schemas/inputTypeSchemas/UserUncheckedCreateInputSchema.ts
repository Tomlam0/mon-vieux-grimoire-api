import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookUncheckedCreateNestedManyWithoutUserInputSchema } from './BookUncheckedCreateNestedManyWithoutUserInputSchema';
import { RatingUncheckedCreateNestedManyWithoutUserInputSchema } from './RatingUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  password: z.string(),
  books: z.lazy(() => BookUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  ratings: z.lazy(() => RatingUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateInputSchema;
