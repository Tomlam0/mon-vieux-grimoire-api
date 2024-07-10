import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookWhereUniqueInputSchema } from '../inputTypeSchemas/BookWhereUniqueInputSchema'

export const BookFindUniqueArgsSchema: z.ZodType<Omit<Prisma.BookFindUniqueArgs, "select">> = z.object({
  where: BookWhereUniqueInputSchema,
}).strict() ;

export default BookFindUniqueArgsSchema;
