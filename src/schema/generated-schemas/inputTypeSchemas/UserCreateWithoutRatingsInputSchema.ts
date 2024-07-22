import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookCreateNestedManyWithoutUserInputSchema } from './BookCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutRatingsInputSchema: z.ZodType<Prisma.UserCreateWithoutRatingsInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  password: z.string(),
  books: z.lazy(() => BookCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutRatingsInputSchema;
