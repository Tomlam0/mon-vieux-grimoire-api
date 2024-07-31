import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const RatingScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RatingScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => RatingScalarWhereWithAggregatesInputSchema),
          z.lazy(() => RatingScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => RatingScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => RatingScalarWhereWithAggregatesInputSchema),
          z.lazy(() => RatingScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      bookId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      userId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      grade: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
    })
    .strict();

export default RatingScalarWhereWithAggregatesInputSchema;
