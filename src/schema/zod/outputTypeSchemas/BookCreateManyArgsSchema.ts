import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookCreateManyInputSchema } from '../inputTypeSchemas/BookCreateManyInputSchema'

export const BookCreateManyArgsSchema: z.ZodType<Prisma.BookCreateManyArgs> = z.object({
  data: z.union([ BookCreateManyInputSchema,BookCreateManyInputSchema.array() ]),
}).strict() ;

export default BookCreateManyArgsSchema;
