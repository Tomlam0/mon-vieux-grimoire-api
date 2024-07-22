import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookCreateWithoutRatingsInputSchema } from './BookCreateWithoutRatingsInputSchema';
import { BookUncheckedCreateWithoutRatingsInputSchema } from './BookUncheckedCreateWithoutRatingsInputSchema';
import { BookCreateOrConnectWithoutRatingsInputSchema } from './BookCreateOrConnectWithoutRatingsInputSchema';
import { BookWhereUniqueInputSchema } from './BookWhereUniqueInputSchema';

export const BookCreateNestedOneWithoutRatingsInputSchema: z.ZodType<Prisma.BookCreateNestedOneWithoutRatingsInput> = z.object({
  create: z.union([ z.lazy(() => BookCreateWithoutRatingsInputSchema),z.lazy(() => BookUncheckedCreateWithoutRatingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookCreateOrConnectWithoutRatingsInputSchema).optional(),
  connect: z.lazy(() => BookWhereUniqueInputSchema).optional()
}).strict();

export default BookCreateNestedOneWithoutRatingsInputSchema;
