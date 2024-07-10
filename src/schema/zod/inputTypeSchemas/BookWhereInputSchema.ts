import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BookRatingCompositeListFilterSchema } from './BookRatingCompositeListFilterSchema';
import { BookRatingObjectEqualityInputSchema } from './BookRatingObjectEqualityInputSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const BookWhereInputSchema: z.ZodType<Prisma.BookWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BookWhereInputSchema),z.lazy(() => BookWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookWhereInputSchema),z.lazy(() => BookWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  author: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  genre: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  year: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  imageUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ratings: z.union([ z.lazy(() => BookRatingCompositeListFilterSchema),z.lazy(() => BookRatingObjectEqualityInputSchema).array() ]).optional(),
  averageRating: z.lazy(() => JsonFilterSchema).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export default BookWhereInputSchema;
