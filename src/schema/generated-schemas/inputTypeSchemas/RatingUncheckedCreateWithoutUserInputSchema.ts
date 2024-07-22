import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RatingUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.RatingUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  bookId: z.string(),
  grade: z.number()
}).strict();

export default RatingUncheckedCreateWithoutUserInputSchema;
