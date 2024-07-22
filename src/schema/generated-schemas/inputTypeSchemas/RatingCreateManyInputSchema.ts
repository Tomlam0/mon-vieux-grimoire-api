import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RatingCreateManyInputSchema: z.ZodType<Prisma.RatingCreateManyInput> = z.object({
  id: z.string().optional(),
  bookId: z.string(),
  userId: z.string(),
  grade: z.number()
}).strict();

export default RatingCreateManyInputSchema;
