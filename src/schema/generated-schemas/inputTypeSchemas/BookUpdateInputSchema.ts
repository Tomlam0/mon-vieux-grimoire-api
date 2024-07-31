import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutBooksNestedInputSchema } from './UserUpdateOneRequiredWithoutBooksNestedInputSchema';
import { RatingUpdateManyWithoutBookNestedInputSchema } from './RatingUpdateManyWithoutBookNestedInputSchema';

export const BookUpdateInputSchema: z.ZodType<Prisma.BookUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    author: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    imageUrl: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    year: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
    genre: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    averageRating: z
      .union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)])
      .optional(),
    user: z.lazy(() => UserUpdateOneRequiredWithoutBooksNestedInputSchema).optional(),
    ratings: z.lazy(() => RatingUpdateManyWithoutBookNestedInputSchema).optional(),
  })
  .strict();

export default BookUpdateInputSchema;
