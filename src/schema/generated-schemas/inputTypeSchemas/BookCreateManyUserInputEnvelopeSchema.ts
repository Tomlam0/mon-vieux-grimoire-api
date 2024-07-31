import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookCreateManyUserInputSchema } from './BookCreateManyUserInputSchema';

export const BookCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.BookCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => BookCreateManyUserInputSchema),
        z.lazy(() => BookCreateManyUserInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default BookCreateManyUserInputEnvelopeSchema;
