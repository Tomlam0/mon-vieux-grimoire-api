import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { BookUpdateOneRequiredWithoutRatingsNestedInputSchema } from './BookUpdateOneRequiredWithoutRatingsNestedInputSchema';
import { UserUpdateOneRequiredWithoutRatingsNestedInputSchema } from './UserUpdateOneRequiredWithoutRatingsNestedInputSchema';

export const RatingUpdateInputSchema: z.ZodType<Prisma.RatingUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    grade: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
    book: z.lazy(() => BookUpdateOneRequiredWithoutRatingsNestedInputSchema).optional(),
    user: z.lazy(() => UserUpdateOneRequiredWithoutRatingsNestedInputSchema).optional(),
  })
  .strict();

export default RatingUpdateInputSchema;
