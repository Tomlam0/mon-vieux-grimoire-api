import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookUpdateManyMutationInputSchema } from '../inputTypeSchemas/BookUpdateManyMutationInputSchema';
import { BookUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BookUncheckedUpdateManyInputSchema';
import { BookWhereInputSchema } from '../inputTypeSchemas/BookWhereInputSchema';

export const BookUpdateManyArgsSchema: z.ZodType<Prisma.BookUpdateManyArgs> = z
  .object({
    data: z.union([BookUpdateManyMutationInputSchema, BookUncheckedUpdateManyInputSchema]),
    where: BookWhereInputSchema.optional(),
  })
  .strict();

export default BookUpdateManyArgsSchema;
