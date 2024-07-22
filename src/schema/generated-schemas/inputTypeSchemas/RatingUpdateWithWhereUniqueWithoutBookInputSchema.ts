import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RatingWhereUniqueInputSchema } from './RatingWhereUniqueInputSchema';
import { RatingUpdateWithoutBookInputSchema } from './RatingUpdateWithoutBookInputSchema';
import { RatingUncheckedUpdateWithoutBookInputSchema } from './RatingUncheckedUpdateWithoutBookInputSchema';

export const RatingUpdateWithWhereUniqueWithoutBookInputSchema: z.ZodType<Prisma.RatingUpdateWithWhereUniqueWithoutBookInput> = z.object({
  where: z.lazy(() => RatingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RatingUpdateWithoutBookInputSchema),z.lazy(() => RatingUncheckedUpdateWithoutBookInputSchema) ]),
}).strict();

export default RatingUpdateWithWhereUniqueWithoutBookInputSchema;
