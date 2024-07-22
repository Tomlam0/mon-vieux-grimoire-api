import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereUniqueInputSchema } from '../inputTypeSchemas/RatingWhereUniqueInputSchema'

export const RatingFindUniqueOrThrowArgsSchema: z.ZodType<Omit<Prisma.RatingFindUniqueOrThrowArgs, "select" | "include">> = z.object({
  where: RatingWhereUniqueInputSchema,
}).strict() ;

export default RatingFindUniqueOrThrowArgsSchema;
