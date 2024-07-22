import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookWhereInputSchema } from './BookWhereInputSchema';

export const BookRelationFilterSchema: z.ZodType<Prisma.BookRelationFilter> = z.object({
  is: z.lazy(() => BookWhereInputSchema).optional(),
  isNot: z.lazy(() => BookWhereInputSchema).optional()
}).strict();

export default BookRelationFilterSchema;
