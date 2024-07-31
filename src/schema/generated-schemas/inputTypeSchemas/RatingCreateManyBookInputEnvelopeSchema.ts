import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RatingCreateManyBookInputSchema } from './RatingCreateManyBookInputSchema';

export const RatingCreateManyBookInputEnvelopeSchema: z.ZodType<Prisma.RatingCreateManyBookInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => RatingCreateManyBookInputSchema),
        z.lazy(() => RatingCreateManyBookInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default RatingCreateManyBookInputEnvelopeSchema;
