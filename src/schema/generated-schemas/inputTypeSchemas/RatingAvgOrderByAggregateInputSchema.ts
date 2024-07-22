import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RatingAvgOrderByAggregateInputSchema: z.ZodType<Prisma.RatingAvgOrderByAggregateInput> = z.object({
  grade: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RatingAvgOrderByAggregateInputSchema;
