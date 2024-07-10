import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BookRatingObjectEqualityInputSchema: z.ZodType<Prisma.BookRatingObjectEqualityInput> = z.object({
  id: z.string(),
  userId: z.string(),
  grade: z.number()
}).strict();

export default BookRatingObjectEqualityInputSchema;
