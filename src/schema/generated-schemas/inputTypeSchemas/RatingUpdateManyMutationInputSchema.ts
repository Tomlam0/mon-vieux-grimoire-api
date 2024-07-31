import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const RatingUpdateManyMutationInputSchema: z.ZodType<Prisma.RatingUpdateManyMutationInput> =
  z
    .object({
      id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      grade: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
    })
    .strict();

export default RatingUpdateManyMutationInputSchema;
