import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BookOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BookOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BookOrderByRelationAggregateInputSchema;
