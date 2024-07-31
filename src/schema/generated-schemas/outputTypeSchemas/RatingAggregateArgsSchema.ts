import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereInputSchema } from '../inputTypeSchemas/RatingWhereInputSchema';
import { RatingOrderByWithRelationInputSchema } from '../inputTypeSchemas/RatingOrderByWithRelationInputSchema';
import { RatingWhereUniqueInputSchema } from '../inputTypeSchemas/RatingWhereUniqueInputSchema';

export const RatingAggregateArgsSchema: z.ZodType<Prisma.RatingAggregateArgs> = z
  .object({
    where: RatingWhereInputSchema.optional(),
    orderBy: z
      .union([RatingOrderByWithRelationInputSchema.array(), RatingOrderByWithRelationInputSchema])
      .optional(),
    cursor: RatingWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export default RatingAggregateArgsSchema;
