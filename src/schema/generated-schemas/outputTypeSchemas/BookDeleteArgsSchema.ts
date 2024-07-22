import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookWhereUniqueInputSchema } from '../inputTypeSchemas/BookWhereUniqueInputSchema'

export const BookDeleteArgsSchema: z.ZodType<Omit<Prisma.BookDeleteArgs, "select" | "include">> = z.object({
  where: BookWhereUniqueInputSchema,
}).strict() ;

export default BookDeleteArgsSchema;
