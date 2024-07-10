import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookRatingListCreateEnvelopeInputSchema } from './BookRatingListCreateEnvelopeInputSchema';
import { BookRatingCreateInputSchema } from './BookRatingCreateInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const BookUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.BookUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  author: z.string(),
  genre: z.string(),
  year: z.number(),
  imageUrl: z.string(),
  ratings: z.union([ z.lazy(() => BookRatingListCreateEnvelopeInputSchema),z.lazy(() => BookRatingCreateInputSchema),z.lazy(() => BookRatingCreateInputSchema).array() ]).optional(),
  averageRating: InputJsonValueSchema
}).strict();

export default BookUncheckedCreateWithoutUserInputSchema;
