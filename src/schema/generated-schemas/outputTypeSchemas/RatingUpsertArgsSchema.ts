import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereUniqueInputSchema } from '../inputTypeSchemas/RatingWhereUniqueInputSchema'
import { RatingCreateInputSchema } from '../inputTypeSchemas/RatingCreateInputSchema'
import { RatingUncheckedCreateInputSchema } from '../inputTypeSchemas/RatingUncheckedCreateInputSchema'
import { RatingUpdateInputSchema } from '../inputTypeSchemas/RatingUpdateInputSchema'
import { RatingUncheckedUpdateInputSchema } from '../inputTypeSchemas/RatingUncheckedUpdateInputSchema'

export const RatingUpsertArgsSchema: z.ZodType<Omit<Prisma.RatingUpsertArgs, "select" | "include">> = z.object({
  where: RatingWhereUniqueInputSchema,
  create: z.union([ RatingCreateInputSchema,RatingUncheckedCreateInputSchema ]),
  update: z.union([ RatingUpdateInputSchema,RatingUncheckedUpdateInputSchema ]),
}).strict() ;

export default RatingUpsertArgsSchema;
