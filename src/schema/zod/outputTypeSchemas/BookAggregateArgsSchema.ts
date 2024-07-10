import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookWhereInputSchema } from '../inputTypeSchemas/BookWhereInputSchema'
import { BookOrderByWithRelationInputSchema } from '../inputTypeSchemas/BookOrderByWithRelationInputSchema'
import { BookWhereUniqueInputSchema } from '../inputTypeSchemas/BookWhereUniqueInputSchema'

export const BookAggregateArgsSchema: z.ZodType<Prisma.BookAggregateArgs> = z.object({
  where: BookWhereInputSchema.optional(),
  orderBy: z.union([ BookOrderByWithRelationInputSchema.array(),BookOrderByWithRelationInputSchema ]).optional(),
  cursor: BookWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BookAggregateArgsSchema;
