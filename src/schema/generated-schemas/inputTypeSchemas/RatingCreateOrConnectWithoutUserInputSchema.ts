import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RatingWhereUniqueInputSchema } from './RatingWhereUniqueInputSchema';
import { RatingCreateWithoutUserInputSchema } from './RatingCreateWithoutUserInputSchema';
import { RatingUncheckedCreateWithoutUserInputSchema } from './RatingUncheckedCreateWithoutUserInputSchema';

export const RatingCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.RatingCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => RatingWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => RatingCreateWithoutUserInputSchema),
        z.lazy(() => RatingUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export default RatingCreateOrConnectWithoutUserInputSchema;
