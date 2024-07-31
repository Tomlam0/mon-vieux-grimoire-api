import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RatingWhereInputSchema } from './RatingWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BookRelationFilterSchema } from './BookRelationFilterSchema';
import { BookWhereInputSchema } from './BookWhereInputSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const RatingWhereUniqueInputSchema: z.ZodType<Prisma.RatingWhereUniqueInput> = z
  .object({
    id: z.string(),
  })
  .and(
    z
      .object({
        id: z.string().optional(),
        AND: z
          .union([
            z.lazy(() => RatingWhereInputSchema),
            z.lazy(() => RatingWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => RatingWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => RatingWhereInputSchema),
            z.lazy(() => RatingWhereInputSchema).array(),
          ])
          .optional(),
        bookId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        grade: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        book: z
          .union([z.lazy(() => BookRelationFilterSchema), z.lazy(() => BookWhereInputSchema)])
          .optional(),
        user: z
          .union([z.lazy(() => UserRelationFilterSchema), z.lazy(() => UserWhereInputSchema)])
          .optional(),
      })
      .strict()
  );

export default RatingWhereUniqueInputSchema;
