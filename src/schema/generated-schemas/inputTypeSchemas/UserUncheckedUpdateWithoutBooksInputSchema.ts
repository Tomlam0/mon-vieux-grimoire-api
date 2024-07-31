import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RatingUncheckedUpdateManyWithoutUserNestedInputSchema } from './RatingUncheckedUpdateManyWithoutUserNestedInputSchema';

export const UserUncheckedUpdateWithoutBooksInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutBooksInput> =
  z
    .object({
      id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      password: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      ratings: z.lazy(() => RatingUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
    })
    .strict();

export default UserUncheckedUpdateWithoutBooksInputSchema;
