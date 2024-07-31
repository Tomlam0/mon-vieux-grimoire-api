import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookWhereInputSchema } from './BookWhereInputSchema';
import { BookUpdateWithoutRatingsInputSchema } from './BookUpdateWithoutRatingsInputSchema';
import { BookUncheckedUpdateWithoutRatingsInputSchema } from './BookUncheckedUpdateWithoutRatingsInputSchema';

export const BookUpdateToOneWithWhereWithoutRatingsInputSchema: z.ZodType<Prisma.BookUpdateToOneWithWhereWithoutRatingsInput> =
  z
    .object({
      where: z.lazy(() => BookWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => BookUpdateWithoutRatingsInputSchema),
        z.lazy(() => BookUncheckedUpdateWithoutRatingsInputSchema),
      ]),
    })
    .strict();

export default BookUpdateToOneWithWhereWithoutRatingsInputSchema;
