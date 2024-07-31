import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookWhereUniqueInputSchema } from '../inputTypeSchemas/BookWhereUniqueInputSchema';
import { BookCreateInputSchema } from '../inputTypeSchemas/BookCreateInputSchema';
import { BookUncheckedCreateInputSchema } from '../inputTypeSchemas/BookUncheckedCreateInputSchema';
import { BookUpdateInputSchema } from '../inputTypeSchemas/BookUpdateInputSchema';
import { BookUncheckedUpdateInputSchema } from '../inputTypeSchemas/BookUncheckedUpdateInputSchema';

export const BookUpsertArgsSchema: z.ZodType<Omit<Prisma.BookUpsertArgs, 'select' | 'include'>> = z
  .object({
    where: BookWhereUniqueInputSchema,
    create: z.union([BookCreateInputSchema, BookUncheckedCreateInputSchema]),
    update: z.union([BookUpdateInputSchema, BookUncheckedUpdateInputSchema]),
  })
  .strict();

export default BookUpsertArgsSchema;
