import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookUpdateInputSchema } from '../inputTypeSchemas/BookUpdateInputSchema'
import { BookUncheckedUpdateInputSchema } from '../inputTypeSchemas/BookUncheckedUpdateInputSchema'
import { BookWhereUniqueInputSchema } from '../inputTypeSchemas/BookWhereUniqueInputSchema'

export const BookUpdateArgsSchema: z.ZodType<Omit<Prisma.BookUpdateArgs, "select" | "include">> = z.object({
  data: z.union([ BookUpdateInputSchema,BookUncheckedUpdateInputSchema ]),
  where: BookWhereUniqueInputSchema,
}).strict() ;

export default BookUpdateArgsSchema;
