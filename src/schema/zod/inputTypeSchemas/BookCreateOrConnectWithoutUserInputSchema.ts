import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookWhereUniqueInputSchema } from './BookWhereUniqueInputSchema';
import { BookCreateWithoutUserInputSchema } from './BookCreateWithoutUserInputSchema';
import { BookUncheckedCreateWithoutUserInputSchema } from './BookUncheckedCreateWithoutUserInputSchema';

export const BookCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.BookCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => BookWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookCreateWithoutUserInputSchema),z.lazy(() => BookUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default BookCreateOrConnectWithoutUserInputSchema;
