import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RatingCreateManyBookInputSchema: z.ZodType<Prisma.RatingCreateManyBookInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    grade: z.number(),
  })
  .strict();

export default RatingCreateManyBookInputSchema;
