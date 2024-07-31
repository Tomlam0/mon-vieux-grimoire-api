import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RatingWhereUniqueInputSchema } from './RatingWhereUniqueInputSchema';
import { RatingCreateWithoutBookInputSchema } from './RatingCreateWithoutBookInputSchema';
import { RatingUncheckedCreateWithoutBookInputSchema } from './RatingUncheckedCreateWithoutBookInputSchema';

export const RatingCreateOrConnectWithoutBookInputSchema: z.ZodType<Prisma.RatingCreateOrConnectWithoutBookInput> =
  z
    .object({
      where: z.lazy(() => RatingWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => RatingCreateWithoutBookInputSchema),
        z.lazy(() => RatingUncheckedCreateWithoutBookInputSchema),
      ]),
    })
    .strict();

export default RatingCreateOrConnectWithoutBookInputSchema;
