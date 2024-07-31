import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BookSumOrderByAggregateInputSchema: z.ZodType<Prisma.BookSumOrderByAggregateInput> = z
  .object({
    year: z.lazy(() => SortOrderSchema).optional(),
    averageRating: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export default BookSumOrderByAggregateInputSchema;
