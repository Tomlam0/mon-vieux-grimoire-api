import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RatingCreateWithoutBookInputSchema } from './RatingCreateWithoutBookInputSchema';
import { RatingUncheckedCreateWithoutBookInputSchema } from './RatingUncheckedCreateWithoutBookInputSchema';
import { RatingCreateOrConnectWithoutBookInputSchema } from './RatingCreateOrConnectWithoutBookInputSchema';
import { RatingUpsertWithWhereUniqueWithoutBookInputSchema } from './RatingUpsertWithWhereUniqueWithoutBookInputSchema';
import { RatingCreateManyBookInputEnvelopeSchema } from './RatingCreateManyBookInputEnvelopeSchema';
import { RatingWhereUniqueInputSchema } from './RatingWhereUniqueInputSchema';
import { RatingUpdateWithWhereUniqueWithoutBookInputSchema } from './RatingUpdateWithWhereUniqueWithoutBookInputSchema';
import { RatingUpdateManyWithWhereWithoutBookInputSchema } from './RatingUpdateManyWithWhereWithoutBookInputSchema';
import { RatingScalarWhereInputSchema } from './RatingScalarWhereInputSchema';

export const RatingUpdateManyWithoutBookNestedInputSchema: z.ZodType<Prisma.RatingUpdateManyWithoutBookNestedInput> = z.object({
  create: z.union([ z.lazy(() => RatingCreateWithoutBookInputSchema),z.lazy(() => RatingCreateWithoutBookInputSchema).array(),z.lazy(() => RatingUncheckedCreateWithoutBookInputSchema),z.lazy(() => RatingUncheckedCreateWithoutBookInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RatingCreateOrConnectWithoutBookInputSchema),z.lazy(() => RatingCreateOrConnectWithoutBookInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RatingUpsertWithWhereUniqueWithoutBookInputSchema),z.lazy(() => RatingUpsertWithWhereUniqueWithoutBookInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RatingCreateManyBookInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RatingWhereUniqueInputSchema),z.lazy(() => RatingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RatingWhereUniqueInputSchema),z.lazy(() => RatingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RatingWhereUniqueInputSchema),z.lazy(() => RatingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RatingWhereUniqueInputSchema),z.lazy(() => RatingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RatingUpdateWithWhereUniqueWithoutBookInputSchema),z.lazy(() => RatingUpdateWithWhereUniqueWithoutBookInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RatingUpdateManyWithWhereWithoutBookInputSchema),z.lazy(() => RatingUpdateManyWithWhereWithoutBookInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RatingScalarWhereInputSchema),z.lazy(() => RatingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RatingUpdateManyWithoutBookNestedInputSchema;
