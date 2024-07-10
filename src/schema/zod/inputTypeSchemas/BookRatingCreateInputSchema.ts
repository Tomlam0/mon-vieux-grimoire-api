import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BookRatingCreateInputSchema: z.ZodType<Prisma.BookRatingCreateInput> = z.object({
  id: z.string(),
  userId: z.string(),
  grade: z.number()
}).strict();

export default BookRatingCreateInputSchema;
