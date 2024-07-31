import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookCreateWithoutRatingsInputSchema } from './BookCreateWithoutRatingsInputSchema';
import { BookUncheckedCreateWithoutRatingsInputSchema } from './BookUncheckedCreateWithoutRatingsInputSchema';
import { BookCreateOrConnectWithoutRatingsInputSchema } from './BookCreateOrConnectWithoutRatingsInputSchema';
import { BookUpsertWithoutRatingsInputSchema } from './BookUpsertWithoutRatingsInputSchema';
import { BookWhereUniqueInputSchema } from './BookWhereUniqueInputSchema';
import { BookUpdateToOneWithWhereWithoutRatingsInputSchema } from './BookUpdateToOneWithWhereWithoutRatingsInputSchema';
import { BookUpdateWithoutRatingsInputSchema } from './BookUpdateWithoutRatingsInputSchema';
import { BookUncheckedUpdateWithoutRatingsInputSchema } from './BookUncheckedUpdateWithoutRatingsInputSchema';

export const BookUpdateOneRequiredWithoutRatingsNestedInputSchema: z.ZodType<Prisma.BookUpdateOneRequiredWithoutRatingsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BookCreateWithoutRatingsInputSchema),
          z.lazy(() => BookUncheckedCreateWithoutRatingsInputSchema),
        ])
        .optional(),
      connectOrCreate: z.lazy(() => BookCreateOrConnectWithoutRatingsInputSchema).optional(),
      upsert: z.lazy(() => BookUpsertWithoutRatingsInputSchema).optional(),
      connect: z.lazy(() => BookWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => BookUpdateToOneWithWhereWithoutRatingsInputSchema),
          z.lazy(() => BookUpdateWithoutRatingsInputSchema),
          z.lazy(() => BookUncheckedUpdateWithoutRatingsInputSchema),
        ])
        .optional(),
    })
    .strict();

export default BookUpdateOneRequiredWithoutRatingsNestedInputSchema;
