import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookCreateNestedManyWithoutUserInputSchema } from './BookCreateNestedManyWithoutUserInputSchema';
import { RatingCreateNestedManyWithoutUserInputSchema } from './RatingCreateNestedManyWithoutUserInputSchema';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  password: z.string(),
  books: z.lazy(() => BookCreateNestedManyWithoutUserInputSchema).optional(),
  ratings: z.lazy(() => RatingCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateInputSchema;
