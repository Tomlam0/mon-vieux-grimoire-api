import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BookUpdateManyWithoutUserNestedInputSchema } from './BookUpdateManyWithoutUserNestedInputSchema';

export const UserUpdateWithoutRatingsInputSchema: z.ZodType<Prisma.UserUpdateWithoutRatingsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  books: z.lazy(() => BookUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUpdateWithoutRatingsInputSchema;
