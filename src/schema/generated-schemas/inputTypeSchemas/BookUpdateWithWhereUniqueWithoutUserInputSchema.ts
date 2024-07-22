import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookWhereUniqueInputSchema } from './BookWhereUniqueInputSchema';
import { BookUpdateWithoutUserInputSchema } from './BookUpdateWithoutUserInputSchema';
import { BookUncheckedUpdateWithoutUserInputSchema } from './BookUncheckedUpdateWithoutUserInputSchema';

export const BookUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.BookUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => BookWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookUpdateWithoutUserInputSchema),z.lazy(() => BookUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default BookUpdateWithWhereUniqueWithoutUserInputSchema;
