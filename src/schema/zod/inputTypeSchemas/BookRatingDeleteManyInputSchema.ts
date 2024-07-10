import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookRatingWhereInputSchema } from './BookRatingWhereInputSchema';

export const BookRatingDeleteManyInputSchema: z.ZodType<Prisma.BookRatingDeleteManyInput> = z.object({
  where: z.lazy(() => BookRatingWhereInputSchema)
}).strict();

export default BookRatingDeleteManyInputSchema;
