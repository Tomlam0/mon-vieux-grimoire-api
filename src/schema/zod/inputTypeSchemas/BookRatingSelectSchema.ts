import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const BookRatingSelectSchema: z.ZodType<Prisma.BookRatingSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  grade: z.boolean().optional(),
}).strict()

export default BookRatingSelectSchema;
