import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RatingScalarWhereInputSchema } from './RatingScalarWhereInputSchema';
import { RatingUpdateManyMutationInputSchema } from './RatingUpdateManyMutationInputSchema';
import { RatingUncheckedUpdateManyWithoutUserInputSchema } from './RatingUncheckedUpdateManyWithoutUserInputSchema';

export const RatingUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.RatingUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => RatingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RatingUpdateManyMutationInputSchema),z.lazy(() => RatingUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default RatingUpdateManyWithWhereWithoutUserInputSchema;
