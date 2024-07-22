import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RatingCreateManyUserInputSchema } from './RatingCreateManyUserInputSchema';

export const RatingCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.RatingCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RatingCreateManyUserInputSchema),z.lazy(() => RatingCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RatingCreateManyUserInputEnvelopeSchema;
