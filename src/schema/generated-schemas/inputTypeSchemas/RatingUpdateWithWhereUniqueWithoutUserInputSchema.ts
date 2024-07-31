import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RatingWhereUniqueInputSchema } from './RatingWhereUniqueInputSchema';
import { RatingUpdateWithoutUserInputSchema } from './RatingUpdateWithoutUserInputSchema';
import { RatingUncheckedUpdateWithoutUserInputSchema } from './RatingUncheckedUpdateWithoutUserInputSchema';

export const RatingUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.RatingUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => RatingWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => RatingUpdateWithoutUserInputSchema),
        z.lazy(() => RatingUncheckedUpdateWithoutUserInputSchema),
      ]),
    })
    .strict();

export default RatingUpdateWithWhereUniqueWithoutUserInputSchema;
