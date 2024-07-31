import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingUpdateManyMutationInputSchema } from '../inputTypeSchemas/RatingUpdateManyMutationInputSchema';
import { RatingUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RatingUncheckedUpdateManyInputSchema';
import { RatingWhereInputSchema } from '../inputTypeSchemas/RatingWhereInputSchema';

export const RatingUpdateManyArgsSchema: z.ZodType<Prisma.RatingUpdateManyArgs> = z
  .object({
    data: z.union([RatingUpdateManyMutationInputSchema, RatingUncheckedUpdateManyInputSchema]),
    where: RatingWhereInputSchema.optional(),
  })
  .strict();

export default RatingUpdateManyArgsSchema;
