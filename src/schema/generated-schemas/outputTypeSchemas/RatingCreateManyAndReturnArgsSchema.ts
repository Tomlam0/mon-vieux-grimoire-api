import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingCreateManyInputSchema } from '../inputTypeSchemas/RatingCreateManyInputSchema';

export const RatingCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RatingCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([RatingCreateManyInputSchema, RatingCreateManyInputSchema.array()]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default RatingCreateManyAndReturnArgsSchema;
