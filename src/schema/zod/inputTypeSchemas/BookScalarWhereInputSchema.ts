import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';

export const BookScalarWhereInputSchema: z.ZodType<Prisma.BookScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BookScalarWhereInputSchema),z.lazy(() => BookScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookScalarWhereInputSchema),z.lazy(() => BookScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  author: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  genre: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  year: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  imageUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  averageRating: z.lazy(() => JsonFilterSchema).optional()
}).strict();

export default BookScalarWhereInputSchema;
