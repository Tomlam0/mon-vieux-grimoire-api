import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BookListRelationFilterSchema } from './BookListRelationFilterSchema';
import { RatingListRelationFilterSchema } from './RatingListRelationFilterSchema';

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    password: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    books: z.lazy(() => BookListRelationFilterSchema).optional(),
    ratings: z.lazy(() => RatingListRelationFilterSchema).optional(),
  })
  .strict();

export default UserWhereInputSchema;
