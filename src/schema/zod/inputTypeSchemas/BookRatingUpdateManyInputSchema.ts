import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookRatingWhereInputSchema } from './BookRatingWhereInputSchema';
import { BookRatingUpdateInputSchema } from './BookRatingUpdateInputSchema';

export const BookRatingUpdateManyInputSchema: z.ZodType<Prisma.BookRatingUpdateManyInput> = z.object({
  where: z.lazy(() => BookRatingWhereInputSchema),
  data: z.lazy(() => BookRatingUpdateInputSchema)
}).strict();

export default BookRatingUpdateManyInputSchema;
