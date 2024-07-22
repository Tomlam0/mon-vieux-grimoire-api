import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RatingUncheckedCreateWithoutBookInputSchema: z.ZodType<Prisma.RatingUncheckedCreateWithoutBookInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  grade: z.number()
}).strict();

export default RatingUncheckedCreateWithoutBookInputSchema;
