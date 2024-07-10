import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BookCountOrderByAggregateInputSchema } from './BookCountOrderByAggregateInputSchema';
import { BookAvgOrderByAggregateInputSchema } from './BookAvgOrderByAggregateInputSchema';
import { BookMaxOrderByAggregateInputSchema } from './BookMaxOrderByAggregateInputSchema';
import { BookMinOrderByAggregateInputSchema } from './BookMinOrderByAggregateInputSchema';
import { BookSumOrderByAggregateInputSchema } from './BookSumOrderByAggregateInputSchema';

export const BookOrderByWithAggregationInputSchema: z.ZodType<Prisma.BookOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => SortOrderSchema).optional(),
  genre: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  imageUrl: z.lazy(() => SortOrderSchema).optional(),
  averageRating: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BookCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BookAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BookMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BookMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BookSumOrderByAggregateInputSchema).optional()
}).strict();

export default BookOrderByWithAggregationInputSchema;
