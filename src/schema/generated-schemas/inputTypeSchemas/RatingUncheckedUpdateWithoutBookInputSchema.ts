import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const RatingUncheckedUpdateWithoutBookInputSchema: z.ZodType<Prisma.RatingUncheckedUpdateWithoutBookInput> =
  z
    .object({
      id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      userId: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      grade: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
    })
    .strict();

export default RatingUncheckedUpdateWithoutBookInputSchema;
