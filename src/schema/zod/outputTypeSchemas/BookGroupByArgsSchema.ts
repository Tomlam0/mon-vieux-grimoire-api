import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookWhereInputSchema } from '../inputTypeSchemas/BookWhereInputSchema'
import { BookOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BookOrderByWithAggregationInputSchema'
import { BookScalarFieldEnumSchema } from '../inputTypeSchemas/BookScalarFieldEnumSchema'
import { BookScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BookScalarWhereWithAggregatesInputSchema'

export const BookGroupByArgsSchema: z.ZodType<Prisma.BookGroupByArgs> = z.object({
  where: BookWhereInputSchema.optional(),
  orderBy: z.union([ BookOrderByWithAggregationInputSchema.array(),BookOrderByWithAggregationInputSchema ]).optional(),
  by: BookScalarFieldEnumSchema.array(),
  having: BookScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BookGroupByArgsSchema;
