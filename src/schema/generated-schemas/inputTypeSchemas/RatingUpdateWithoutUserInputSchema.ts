import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { BookUpdateOneRequiredWithoutRatingsNestedInputSchema } from './BookUpdateOneRequiredWithoutRatingsNestedInputSchema';

export const RatingUpdateWithoutUserInputSchema: z.ZodType<Prisma.RatingUpdateWithoutUserInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    grade: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
    book: z.lazy(() => BookUpdateOneRequiredWithoutRatingsNestedInputSchema).optional(),
  })
  .strict();

export default RatingUpdateWithoutUserInputSchema;
