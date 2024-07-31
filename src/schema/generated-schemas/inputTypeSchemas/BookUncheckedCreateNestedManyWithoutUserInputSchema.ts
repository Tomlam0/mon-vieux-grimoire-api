import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookCreateWithoutUserInputSchema } from './BookCreateWithoutUserInputSchema';
import { BookUncheckedCreateWithoutUserInputSchema } from './BookUncheckedCreateWithoutUserInputSchema';
import { BookCreateOrConnectWithoutUserInputSchema } from './BookCreateOrConnectWithoutUserInputSchema';
import { BookCreateManyUserInputEnvelopeSchema } from './BookCreateManyUserInputEnvelopeSchema';
import { BookWhereUniqueInputSchema } from './BookWhereUniqueInputSchema';

export const BookUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.BookUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BookCreateWithoutUserInputSchema),
          z.lazy(() => BookCreateWithoutUserInputSchema).array(),
          z.lazy(() => BookUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => BookUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => BookCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => BookCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => BookCreateManyUserInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => BookWhereUniqueInputSchema),
          z.lazy(() => BookWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default BookUncheckedCreateNestedManyWithoutUserInputSchema;
