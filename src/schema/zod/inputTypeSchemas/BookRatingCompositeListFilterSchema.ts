import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookRatingObjectEqualityInputSchema } from './BookRatingObjectEqualityInputSchema';
import { BookRatingWhereInputSchema } from './BookRatingWhereInputSchema';

export const BookRatingCompositeListFilterSchema: z.ZodType<Prisma.BookRatingCompositeListFilter> = z.object({
  equals: z.lazy(() => BookRatingObjectEqualityInputSchema).array().optional(),
  every: z.lazy(() => BookRatingWhereInputSchema).optional(),
  some: z.lazy(() => BookRatingWhereInputSchema).optional(),
  none: z.lazy(() => BookRatingWhereInputSchema).optional(),
  isEmpty: z.boolean().optional(),
  isSet: z.boolean().optional()
}).strict();

export default BookRatingCompositeListFilterSchema;
