import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { RatingCountOrderByAggregateInputSchema } from './RatingCountOrderByAggregateInputSchema';
import { RatingAvgOrderByAggregateInputSchema } from './RatingAvgOrderByAggregateInputSchema';
import { RatingMaxOrderByAggregateInputSchema } from './RatingMaxOrderByAggregateInputSchema';
import { RatingMinOrderByAggregateInputSchema } from './RatingMinOrderByAggregateInputSchema';
import { RatingSumOrderByAggregateInputSchema } from './RatingSumOrderByAggregateInputSchema';

export const RatingOrderByWithAggregationInputSchema: z.ZodType<Prisma.RatingOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      bookId: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      grade: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => RatingCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => RatingAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => RatingMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => RatingMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => RatingSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default RatingOrderByWithAggregationInputSchema;
