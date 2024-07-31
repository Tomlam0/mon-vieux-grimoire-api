import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookScalarWhereInputSchema } from './BookScalarWhereInputSchema';
import { BookUpdateManyMutationInputSchema } from './BookUpdateManyMutationInputSchema';
import { BookUncheckedUpdateManyWithoutUserInputSchema } from './BookUncheckedUpdateManyWithoutUserInputSchema';

export const BookUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.BookUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => BookScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => BookUpdateManyMutationInputSchema),
        z.lazy(() => BookUncheckedUpdateManyWithoutUserInputSchema),
      ]),
    })
    .strict();

export default BookUpdateManyWithWhereWithoutUserInputSchema;
