import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RatingUpdateManyWithoutUserNestedInputSchema } from './RatingUpdateManyWithoutUserNestedInputSchema';

export const UserUpdateWithoutBooksInputSchema: z.ZodType<Prisma.UserUpdateWithoutBooksInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    password: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    ratings: z.lazy(() => RatingUpdateManyWithoutUserNestedInputSchema).optional(),
  })
  .strict();

export default UserUpdateWithoutBooksInputSchema;
