import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereUniqueInputSchema } from '../inputTypeSchemas/RatingWhereUniqueInputSchema';

export const RatingFindUniqueArgsSchema: z.ZodType<
  Omit<Prisma.RatingFindUniqueArgs, 'select' | 'include'>
> = z
  .object({
    where: RatingWhereUniqueInputSchema,
  })
  .strict();

export default RatingFindUniqueArgsSchema;
