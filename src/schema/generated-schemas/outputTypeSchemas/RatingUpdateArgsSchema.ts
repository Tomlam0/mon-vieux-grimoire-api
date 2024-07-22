import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingUpdateInputSchema } from '../inputTypeSchemas/RatingUpdateInputSchema'
import { RatingUncheckedUpdateInputSchema } from '../inputTypeSchemas/RatingUncheckedUpdateInputSchema'
import { RatingWhereUniqueInputSchema } from '../inputTypeSchemas/RatingWhereUniqueInputSchema'

export const RatingUpdateArgsSchema: z.ZodType<Omit<Prisma.RatingUpdateArgs, "select" | "include">> = z.object({
  data: z.union([ RatingUpdateInputSchema,RatingUncheckedUpdateInputSchema ]),
  where: RatingWhereUniqueInputSchema,
}).strict() ;

export default RatingUpdateArgsSchema;
