import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereUniqueInputSchema } from '../inputTypeSchemas/RatingWhereUniqueInputSchema';

export const RatingDeleteArgsSchema: z.ZodType<
  Omit<Prisma.RatingDeleteArgs, 'select' | 'include'>
> = z
  .object({
    where: RatingWhereUniqueInputSchema,
  })
  .strict();

export default RatingDeleteArgsSchema;
