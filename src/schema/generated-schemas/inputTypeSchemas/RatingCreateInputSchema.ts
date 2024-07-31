import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookCreateNestedOneWithoutRatingsInputSchema } from './BookCreateNestedOneWithoutRatingsInputSchema';
import { UserCreateNestedOneWithoutRatingsInputSchema } from './UserCreateNestedOneWithoutRatingsInputSchema';

export const RatingCreateInputSchema: z.ZodType<Prisma.RatingCreateInput> = z
  .object({
    id: z.string().optional(),
    grade: z.number(),
    book: z.lazy(() => BookCreateNestedOneWithoutRatingsInputSchema),
    user: z.lazy(() => UserCreateNestedOneWithoutRatingsInputSchema),
  })
  .strict();

export default RatingCreateInputSchema;
