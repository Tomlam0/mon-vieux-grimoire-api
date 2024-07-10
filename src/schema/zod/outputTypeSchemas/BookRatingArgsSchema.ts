import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookRatingSelectSchema } from '../inputTypeSchemas/BookRatingSelectSchema';

export const BookRatingArgsSchema: z.ZodType<Prisma.BookRatingDefaultArgs> = z.object({
  select: z.lazy(() => BookRatingSelectSchema).optional(),
}).strict();

export default BookRatingArgsSchema;
