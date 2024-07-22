import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BookOrderByRelationAggregateInputSchema } from './BookOrderByRelationAggregateInputSchema';
import { RatingOrderByRelationAggregateInputSchema } from './RatingOrderByRelationAggregateInputSchema';

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  books: z.lazy(() => BookOrderByRelationAggregateInputSchema).optional(),
  ratings: z.lazy(() => RatingOrderByRelationAggregateInputSchema).optional()
}).strict();

export default UserOrderByWithRelationInputSchema;
