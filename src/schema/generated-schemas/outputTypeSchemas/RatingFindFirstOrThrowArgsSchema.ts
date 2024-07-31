import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereInputSchema } from '../inputTypeSchemas/RatingWhereInputSchema';
import { RatingOrderByWithRelationInputSchema } from '../inputTypeSchemas/RatingOrderByWithRelationInputSchema';
import { RatingWhereUniqueInputSchema } from '../inputTypeSchemas/RatingWhereUniqueInputSchema';
import { RatingScalarFieldEnumSchema } from '../inputTypeSchemas/RatingScalarFieldEnumSchema';

export const RatingFindFirstOrThrowArgsSchema: z.ZodType<
  Omit<Prisma.RatingFindFirstOrThrowArgs, 'select' | 'include'>
> = z
  .object({
    where: RatingWhereInputSchema.optional(),
    orderBy: z
      .union([RatingOrderByWithRelationInputSchema.array(), RatingOrderByWithRelationInputSchema])
      .optional(),
    cursor: RatingWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([RatingScalarFieldEnumSchema, RatingScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export default RatingFindFirstOrThrowArgsSchema;
