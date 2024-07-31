import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BookMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BookMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    author: z.lazy(() => SortOrderSchema).optional(),
    imageUrl: z.lazy(() => SortOrderSchema).optional(),
    year: z.lazy(() => SortOrderSchema).optional(),
    genre: z.lazy(() => SortOrderSchema).optional(),
    averageRating: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export default BookMaxOrderByAggregateInputSchema;
