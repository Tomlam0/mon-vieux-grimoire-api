import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutBooksInputSchema } from './UserCreateNestedOneWithoutBooksInputSchema';

export const BookCreateWithoutRatingsInputSchema: z.ZodType<Prisma.BookCreateWithoutRatingsInput> =
  z
    .object({
      id: z.string().optional(),
      title: z.string(),
      author: z.string(),
      imageUrl: z.string(),
      year: z.number(),
      genre: z.string(),
      averageRating: z.number(),
      user: z.lazy(() => UserCreateNestedOneWithoutBooksInputSchema),
    })
    .strict();

export default BookCreateWithoutRatingsInputSchema;
