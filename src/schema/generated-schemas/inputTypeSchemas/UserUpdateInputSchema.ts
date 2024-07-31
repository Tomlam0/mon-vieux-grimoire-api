import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BookUpdateManyWithoutUserNestedInputSchema } from './BookUpdateManyWithoutUserNestedInputSchema';
import { RatingUpdateManyWithoutUserNestedInputSchema } from './RatingUpdateManyWithoutUserNestedInputSchema';

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    password: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    books: z.lazy(() => BookUpdateManyWithoutUserNestedInputSchema).optional(),
    ratings: z.lazy(() => RatingUpdateManyWithoutUserNestedInputSchema).optional(),
  })
  .strict();

export default UserUpdateInputSchema;
