import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';

export const RatingScalarWhereInputSchema: z.ZodType<Prisma.RatingScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RatingScalarWhereInputSchema),z.lazy(() => RatingScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RatingScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RatingScalarWhereInputSchema),z.lazy(() => RatingScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bookId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  grade: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default RatingScalarWhereInputSchema;
