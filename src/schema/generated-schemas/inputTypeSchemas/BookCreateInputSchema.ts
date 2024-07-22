import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutBooksInputSchema } from './UserCreateNestedOneWithoutBooksInputSchema';
import { RatingCreateNestedManyWithoutBookInputSchema } from './RatingCreateNestedManyWithoutBookInputSchema';

export const BookCreateInputSchema: z.ZodType<Prisma.BookCreateInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  author: z.string(),
  imageUrl: z.string(),
  year: z.number(),
  genre: z.string(),
  averageRating: z.number(),
  user: z.lazy(() => UserCreateNestedOneWithoutBooksInputSchema),
  ratings: z.lazy(() => RatingCreateNestedManyWithoutBookInputSchema).optional()
}).strict();

export default BookCreateInputSchema;
