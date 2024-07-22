import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutRatingsInputSchema } from './UserCreateNestedOneWithoutRatingsInputSchema';

export const RatingCreateWithoutBookInputSchema: z.ZodType<Prisma.RatingCreateWithoutBookInput> = z.object({
  id: z.string().optional(),
  grade: z.number(),
  user: z.lazy(() => UserCreateNestedOneWithoutRatingsInputSchema)
}).strict();

export default RatingCreateWithoutBookInputSchema;
