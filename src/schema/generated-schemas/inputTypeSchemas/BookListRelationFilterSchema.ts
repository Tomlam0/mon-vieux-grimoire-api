import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookWhereInputSchema } from './BookWhereInputSchema';

export const BookListRelationFilterSchema: z.ZodType<Prisma.BookListRelationFilter> = z
  .object({
    every: z.lazy(() => BookWhereInputSchema).optional(),
    some: z.lazy(() => BookWhereInputSchema).optional(),
    none: z.lazy(() => BookWhereInputSchema).optional(),
  })
  .strict();

export default BookListRelationFilterSchema;
