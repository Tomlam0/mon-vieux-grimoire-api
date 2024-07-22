import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookCreateManyInputSchema } from '../inputTypeSchemas/BookCreateManyInputSchema'

export const BookCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BookCreateManyAndReturnArgs> = z.object({
  data: z.union([ BookCreateManyInputSchema,BookCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BookCreateManyAndReturnArgsSchema;
