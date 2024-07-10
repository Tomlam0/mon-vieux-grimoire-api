import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { BookRatingListUpdateEnvelopeInputSchema } from './BookRatingListUpdateEnvelopeInputSchema';
import { BookRatingCreateInputSchema } from './BookRatingCreateInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const BookUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BookUncheckedUpdateManyInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genre: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  imageUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ratings: z.union([ z.lazy(() => BookRatingListUpdateEnvelopeInputSchema),z.lazy(() => BookRatingCreateInputSchema),z.lazy(() => BookRatingCreateInputSchema).array() ]).optional(),
  averageRating: z.union([ InputJsonValueSchema,InputJsonValueSchema ]).optional(),
}).strict();

export default BookUncheckedUpdateManyInputSchema;
