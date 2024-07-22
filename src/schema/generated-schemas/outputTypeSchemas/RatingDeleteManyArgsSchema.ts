import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereInputSchema } from '../inputTypeSchemas/RatingWhereInputSchema'

export const RatingDeleteManyArgsSchema: z.ZodType<Prisma.RatingDeleteManyArgs> = z.object({
  where: RatingWhereInputSchema.optional(),
}).strict() ;

export default RatingDeleteManyArgsSchema;
