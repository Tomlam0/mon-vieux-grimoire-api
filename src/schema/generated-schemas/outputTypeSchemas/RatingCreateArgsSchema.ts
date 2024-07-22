import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingCreateInputSchema } from '../inputTypeSchemas/RatingCreateInputSchema'
import { RatingUncheckedCreateInputSchema } from '../inputTypeSchemas/RatingUncheckedCreateInputSchema'

export const RatingCreateArgsSchema: z.ZodType<Omit<Prisma.RatingCreateArgs, "select" | "include">> = z.object({
  data: z.union([ RatingCreateInputSchema,RatingUncheckedCreateInputSchema ]),
}).strict() ;

export default RatingCreateArgsSchema;
