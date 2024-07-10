import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';

export const BookScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BookScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BookScalarWhereWithAggregatesInputSchema),z.lazy(() => BookScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookScalarWhereWithAggregatesInputSchema),z.lazy(() => BookScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  author: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  genre: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  year: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  imageUrl: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  averageRating: z.lazy(() => JsonWithAggregatesFilterSchema).optional()
}).strict();

export default BookScalarWhereWithAggregatesInputSchema;
