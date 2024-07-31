import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BookAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BookAvgOrderByAggregateInput> = z
  .object({
    year: z.lazy(() => SortOrderSchema).optional(),
    averageRating: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export default BookAvgOrderByAggregateInputSchema;
