import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RatingCreateWithoutUserInputSchema } from './RatingCreateWithoutUserInputSchema';
import { RatingUncheckedCreateWithoutUserInputSchema } from './RatingUncheckedCreateWithoutUserInputSchema';
import { RatingCreateOrConnectWithoutUserInputSchema } from './RatingCreateOrConnectWithoutUserInputSchema';
import { RatingUpsertWithWhereUniqueWithoutUserInputSchema } from './RatingUpsertWithWhereUniqueWithoutUserInputSchema';
import { RatingCreateManyUserInputEnvelopeSchema } from './RatingCreateManyUserInputEnvelopeSchema';
import { RatingWhereUniqueInputSchema } from './RatingWhereUniqueInputSchema';
import { RatingUpdateWithWhereUniqueWithoutUserInputSchema } from './RatingUpdateWithWhereUniqueWithoutUserInputSchema';
import { RatingUpdateManyWithWhereWithoutUserInputSchema } from './RatingUpdateManyWithWhereWithoutUserInputSchema';
import { RatingScalarWhereInputSchema } from './RatingScalarWhereInputSchema';

export const RatingUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.RatingUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RatingCreateWithoutUserInputSchema),
          z.lazy(() => RatingCreateWithoutUserInputSchema).array(),
          z.lazy(() => RatingUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => RatingUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RatingCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => RatingCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => RatingUpsertWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => RatingUpsertWithWhereUniqueWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => RatingCreateManyUserInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => RatingWhereUniqueInputSchema),
          z.lazy(() => RatingWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => RatingWhereUniqueInputSchema),
          z.lazy(() => RatingWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => RatingWhereUniqueInputSchema),
          z.lazy(() => RatingWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => RatingWhereUniqueInputSchema),
          z.lazy(() => RatingWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => RatingUpdateWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => RatingUpdateWithWhereUniqueWithoutUserInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => RatingUpdateManyWithWhereWithoutUserInputSchema),
          z.lazy(() => RatingUpdateManyWithWhereWithoutUserInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => RatingScalarWhereInputSchema),
          z.lazy(() => RatingScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default RatingUncheckedUpdateManyWithoutUserNestedInputSchema;
