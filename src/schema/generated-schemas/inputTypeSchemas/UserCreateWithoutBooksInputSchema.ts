import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RatingCreateNestedManyWithoutUserInputSchema } from './RatingCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutBooksInputSchema: z.ZodType<Prisma.UserCreateWithoutBooksInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  password: z.string(),
  ratings: z.lazy(() => RatingCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutBooksInputSchema;
