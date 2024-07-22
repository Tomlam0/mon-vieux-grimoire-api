import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookUpdateWithoutRatingsInputSchema } from './BookUpdateWithoutRatingsInputSchema';
import { BookUncheckedUpdateWithoutRatingsInputSchema } from './BookUncheckedUpdateWithoutRatingsInputSchema';
import { BookCreateWithoutRatingsInputSchema } from './BookCreateWithoutRatingsInputSchema';
import { BookUncheckedCreateWithoutRatingsInputSchema } from './BookUncheckedCreateWithoutRatingsInputSchema';
import { BookWhereInputSchema } from './BookWhereInputSchema';

export const BookUpsertWithoutRatingsInputSchema: z.ZodType<Prisma.BookUpsertWithoutRatingsInput> = z.object({
  update: z.union([ z.lazy(() => BookUpdateWithoutRatingsInputSchema),z.lazy(() => BookUncheckedUpdateWithoutRatingsInputSchema) ]),
  create: z.union([ z.lazy(() => BookCreateWithoutRatingsInputSchema),z.lazy(() => BookUncheckedCreateWithoutRatingsInputSchema) ]),
  where: z.lazy(() => BookWhereInputSchema).optional()
}).strict();

export default BookUpsertWithoutRatingsInputSchema;
