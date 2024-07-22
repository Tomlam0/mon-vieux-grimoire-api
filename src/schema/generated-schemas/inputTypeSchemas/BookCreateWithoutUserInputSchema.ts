import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RatingCreateNestedManyWithoutBookInputSchema } from './RatingCreateNestedManyWithoutBookInputSchema';

export const BookCreateWithoutUserInputSchema: z.ZodType<Prisma.BookCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  author: z.string(),
  imageUrl: z.string(),
  year: z.number(),
  genre: z.string(),
  averageRating: z.number(),
  ratings: z.lazy(() => RatingCreateNestedManyWithoutBookInputSchema).optional()
}).strict();

export default BookCreateWithoutUserInputSchema;
