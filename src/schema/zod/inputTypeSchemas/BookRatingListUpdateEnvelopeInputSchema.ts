import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookRatingCreateInputSchema } from './BookRatingCreateInputSchema';
import { BookRatingUpdateManyInputSchema } from './BookRatingUpdateManyInputSchema';
import { BookRatingDeleteManyInputSchema } from './BookRatingDeleteManyInputSchema';

export const BookRatingListUpdateEnvelopeInputSchema: z.ZodType<Prisma.BookRatingListUpdateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => BookRatingCreateInputSchema),z.lazy(() => BookRatingCreateInputSchema).array() ]).optional(),
  push: z.union([ z.lazy(() => BookRatingCreateInputSchema),z.lazy(() => BookRatingCreateInputSchema).array() ]).optional(),
  updateMany: z.lazy(() => BookRatingUpdateManyInputSchema).optional(),
  deleteMany: z.lazy(() => BookRatingDeleteManyInputSchema).optional()
}).strict();

export default BookRatingListUpdateEnvelopeInputSchema;
