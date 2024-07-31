import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookWhereInputSchema } from '../inputTypeSchemas/BookWhereInputSchema';
import { BookOrderByWithRelationInputSchema } from '../inputTypeSchemas/BookOrderByWithRelationInputSchema';
import { BookWhereUniqueInputSchema } from '../inputTypeSchemas/BookWhereUniqueInputSchema';
import { BookScalarFieldEnumSchema } from '../inputTypeSchemas/BookScalarFieldEnumSchema';

export const BookFindFirstOrThrowArgsSchema: z.ZodType<
  Omit<Prisma.BookFindFirstOrThrowArgs, 'select' | 'include'>
> = z
  .object({
    where: BookWhereInputSchema.optional(),
    orderBy: z
      .union([BookOrderByWithRelationInputSchema.array(), BookOrderByWithRelationInputSchema])
      .optional(),
    cursor: BookWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([BookScalarFieldEnumSchema, BookScalarFieldEnumSchema.array()]).optional(),
  })
  .strict();

export default BookFindFirstOrThrowArgsSchema;
