import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RatingScalarWhereInputSchema } from './RatingScalarWhereInputSchema';
import { RatingUpdateManyMutationInputSchema } from './RatingUpdateManyMutationInputSchema';
import { RatingUncheckedUpdateManyWithoutBookInputSchema } from './RatingUncheckedUpdateManyWithoutBookInputSchema';

export const RatingUpdateManyWithWhereWithoutBookInputSchema: z.ZodType<Prisma.RatingUpdateManyWithWhereWithoutBookInput> = z.object({
  where: z.lazy(() => RatingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RatingUpdateManyMutationInputSchema),z.lazy(() => RatingUncheckedUpdateManyWithoutBookInputSchema) ]),
}).strict();

export default RatingUpdateManyWithWhereWithoutBookInputSchema;
