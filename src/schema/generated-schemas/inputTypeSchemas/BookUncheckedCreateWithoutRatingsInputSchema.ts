import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BookUncheckedCreateWithoutRatingsInputSchema: z.ZodType<Prisma.BookUncheckedCreateWithoutRatingsInput> =
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      title: z.string(),
      author: z.string(),
      imageUrl: z.string(),
      year: z.number(),
      genre: z.string(),
      averageRating: z.number(),
    })
    .strict();

export default BookUncheckedCreateWithoutRatingsInputSchema;
