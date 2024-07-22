import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RatingWhereUniqueInputSchema } from './RatingWhereUniqueInputSchema';
import { RatingUpdateWithoutBookInputSchema } from './RatingUpdateWithoutBookInputSchema';
import { RatingUncheckedUpdateWithoutBookInputSchema } from './RatingUncheckedUpdateWithoutBookInputSchema';
import { RatingCreateWithoutBookInputSchema } from './RatingCreateWithoutBookInputSchema';
import { RatingUncheckedCreateWithoutBookInputSchema } from './RatingUncheckedCreateWithoutBookInputSchema';

export const RatingUpsertWithWhereUniqueWithoutBookInputSchema: z.ZodType<Prisma.RatingUpsertWithWhereUniqueWithoutBookInput> = z.object({
  where: z.lazy(() => RatingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RatingUpdateWithoutBookInputSchema),z.lazy(() => RatingUncheckedUpdateWithoutBookInputSchema) ]),
  create: z.union([ z.lazy(() => RatingCreateWithoutBookInputSchema),z.lazy(() => RatingUncheckedCreateWithoutBookInputSchema) ]),
}).strict();

export default RatingUpsertWithWhereUniqueWithoutBookInputSchema;
