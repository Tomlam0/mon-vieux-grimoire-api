import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RatingWhereUniqueInputSchema } from './RatingWhereUniqueInputSchema';
import { RatingUpdateWithoutUserInputSchema } from './RatingUpdateWithoutUserInputSchema';
import { RatingUncheckedUpdateWithoutUserInputSchema } from './RatingUncheckedUpdateWithoutUserInputSchema';
import { RatingCreateWithoutUserInputSchema } from './RatingCreateWithoutUserInputSchema';
import { RatingUncheckedCreateWithoutUserInputSchema } from './RatingUncheckedCreateWithoutUserInputSchema';

export const RatingUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.RatingUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => RatingWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => RatingUpdateWithoutUserInputSchema),
        z.lazy(() => RatingUncheckedUpdateWithoutUserInputSchema),
      ]),
      create: z.union([
        z.lazy(() => RatingCreateWithoutUserInputSchema),
        z.lazy(() => RatingUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export default RatingUpsertWithWhereUniqueWithoutUserInputSchema;
