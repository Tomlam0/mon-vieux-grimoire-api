import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookRatingCreateInputSchema } from './BookRatingCreateInputSchema';

export const BookRatingListCreateEnvelopeInputSchema: z.ZodType<Prisma.BookRatingListCreateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => BookRatingCreateInputSchema),z.lazy(() => BookRatingCreateInputSchema).array() ]).optional(),
}).strict();

export default BookRatingListCreateEnvelopeInputSchema;
