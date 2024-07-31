import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RatingCreateManyUserInputSchema: z.ZodType<Prisma.RatingCreateManyUserInput> = z
  .object({
    id: z.string().optional(),
    bookId: z.string(),
    grade: z.number(),
  })
  .strict();

export default RatingCreateManyUserInputSchema;
