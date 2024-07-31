import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookCreateNestedOneWithoutRatingsInputSchema } from './BookCreateNestedOneWithoutRatingsInputSchema';

export const RatingCreateWithoutUserInputSchema: z.ZodType<Prisma.RatingCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    grade: z.number(),
    book: z.lazy(() => BookCreateNestedOneWithoutRatingsInputSchema),
  })
  .strict();

export default RatingCreateWithoutUserInputSchema;
