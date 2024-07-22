import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookWhereUniqueInputSchema } from './BookWhereUniqueInputSchema';
import { BookCreateWithoutRatingsInputSchema } from './BookCreateWithoutRatingsInputSchema';
import { BookUncheckedCreateWithoutRatingsInputSchema } from './BookUncheckedCreateWithoutRatingsInputSchema';

export const BookCreateOrConnectWithoutRatingsInputSchema: z.ZodType<Prisma.BookCreateOrConnectWithoutRatingsInput> = z.object({
  where: z.lazy(() => BookWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookCreateWithoutRatingsInputSchema),z.lazy(() => BookUncheckedCreateWithoutRatingsInputSchema) ]),
}).strict();

export default BookCreateOrConnectWithoutRatingsInputSchema;
