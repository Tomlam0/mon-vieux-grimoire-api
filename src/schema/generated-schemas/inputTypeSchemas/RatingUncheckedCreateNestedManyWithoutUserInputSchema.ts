import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RatingCreateWithoutUserInputSchema } from './RatingCreateWithoutUserInputSchema';
import { RatingUncheckedCreateWithoutUserInputSchema } from './RatingUncheckedCreateWithoutUserInputSchema';
import { RatingCreateOrConnectWithoutUserInputSchema } from './RatingCreateOrConnectWithoutUserInputSchema';
import { RatingCreateManyUserInputEnvelopeSchema } from './RatingCreateManyUserInputEnvelopeSchema';
import { RatingWhereUniqueInputSchema } from './RatingWhereUniqueInputSchema';

export const RatingUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.RatingUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => RatingCreateWithoutUserInputSchema),z.lazy(() => RatingCreateWithoutUserInputSchema).array(),z.lazy(() => RatingUncheckedCreateWithoutUserInputSchema),z.lazy(() => RatingUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RatingCreateOrConnectWithoutUserInputSchema),z.lazy(() => RatingCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RatingCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RatingWhereUniqueInputSchema),z.lazy(() => RatingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RatingUncheckedCreateNestedManyWithoutUserInputSchema;
