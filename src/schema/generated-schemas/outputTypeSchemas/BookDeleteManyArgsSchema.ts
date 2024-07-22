import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookWhereInputSchema } from '../inputTypeSchemas/BookWhereInputSchema'

export const BookDeleteManyArgsSchema: z.ZodType<Prisma.BookDeleteManyArgs> = z.object({
  where: BookWhereInputSchema.optional(),
}).strict() ;

export default BookDeleteManyArgsSchema;
