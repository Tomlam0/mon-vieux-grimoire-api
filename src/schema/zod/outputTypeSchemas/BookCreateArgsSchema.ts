import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookCreateInputSchema } from '../inputTypeSchemas/BookCreateInputSchema'
import { BookUncheckedCreateInputSchema } from '../inputTypeSchemas/BookUncheckedCreateInputSchema'

export const BookCreateArgsSchema: z.ZodType<Omit<Prisma.BookCreateArgs, "select">> = z.object({
  data: z.union([ BookCreateInputSchema,BookUncheckedCreateInputSchema ]),
}).strict() ;

export default BookCreateArgsSchema;
