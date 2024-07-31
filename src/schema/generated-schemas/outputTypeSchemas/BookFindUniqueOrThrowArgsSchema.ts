import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookWhereUniqueInputSchema } from '../inputTypeSchemas/BookWhereUniqueInputSchema';

export const BookFindUniqueOrThrowArgsSchema: z.ZodType<
  Omit<Prisma.BookFindUniqueOrThrowArgs, 'select' | 'include'>
> = z
  .object({
    where: BookWhereUniqueInputSchema,
  })
  .strict();

export default BookFindUniqueOrThrowArgsSchema;
