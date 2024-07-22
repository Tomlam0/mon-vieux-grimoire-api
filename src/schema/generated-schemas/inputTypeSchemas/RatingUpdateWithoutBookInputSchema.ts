import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutRatingsNestedInputSchema } from './UserUpdateOneRequiredWithoutRatingsNestedInputSchema';

export const RatingUpdateWithoutBookInputSchema: z.ZodType<Prisma.RatingUpdateWithoutBookInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutRatingsNestedInputSchema).optional()
}).strict();

export default RatingUpdateWithoutBookInputSchema;
