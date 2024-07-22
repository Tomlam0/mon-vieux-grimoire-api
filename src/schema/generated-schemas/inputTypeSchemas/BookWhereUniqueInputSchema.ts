import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookWhereInputSchema } from './BookWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { RatingListRelationFilterSchema } from './RatingListRelationFilterSchema';

export const BookWhereUniqueInputSchema: z.ZodType<Prisma.BookWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => BookWhereInputSchema),z.lazy(() => BookWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookWhereInputSchema),z.lazy(() => BookWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  author: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  imageUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  year: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  genre: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  averageRating: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  ratings: z.lazy(() => RatingListRelationFilterSchema).optional()
}).strict());

export default BookWhereUniqueInputSchema;
