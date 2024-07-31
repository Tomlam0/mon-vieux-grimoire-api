import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RatingUncheckedCreateNestedManyWithoutBookInputSchema } from './RatingUncheckedCreateNestedManyWithoutBookInputSchema';

export const BookUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.BookUncheckedCreateWithoutUserInput> =
  z
    .object({
      id: z.string().optional(),
      title: z.string(),
      author: z.string(),
      imageUrl: z.string(),
      year: z.number(),
      genre: z.string(),
      averageRating: z.number(),
      ratings: z.lazy(() => RatingUncheckedCreateNestedManyWithoutBookInputSchema).optional(),
    })
    .strict();

export default BookUncheckedCreateWithoutUserInputSchema;
