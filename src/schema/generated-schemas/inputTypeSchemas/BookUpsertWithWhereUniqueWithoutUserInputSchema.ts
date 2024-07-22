import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookWhereUniqueInputSchema } from './BookWhereUniqueInputSchema';
import { BookUpdateWithoutUserInputSchema } from './BookUpdateWithoutUserInputSchema';
import { BookUncheckedUpdateWithoutUserInputSchema } from './BookUncheckedUpdateWithoutUserInputSchema';
import { BookCreateWithoutUserInputSchema } from './BookCreateWithoutUserInputSchema';
import { BookUncheckedCreateWithoutUserInputSchema } from './BookUncheckedCreateWithoutUserInputSchema';

export const BookUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.BookUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => BookWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookUpdateWithoutUserInputSchema),z.lazy(() => BookUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => BookCreateWithoutUserInputSchema),z.lazy(() => BookUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default BookUpsertWithWhereUniqueWithoutUserInputSchema;
