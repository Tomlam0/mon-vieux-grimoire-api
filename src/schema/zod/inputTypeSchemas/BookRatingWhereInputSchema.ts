import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';

export const BookRatingWhereInputSchema: z.ZodType<Prisma.BookRatingWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BookRatingWhereInputSchema),z.lazy(() => BookRatingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookRatingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookRatingWhereInputSchema),z.lazy(() => BookRatingWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  grade: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default BookRatingWhereInputSchema;
