import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RatingCreateWithoutBookInputSchema } from './RatingCreateWithoutBookInputSchema';
import { RatingUncheckedCreateWithoutBookInputSchema } from './RatingUncheckedCreateWithoutBookInputSchema';
import { RatingCreateOrConnectWithoutBookInputSchema } from './RatingCreateOrConnectWithoutBookInputSchema';
import { RatingCreateManyBookInputEnvelopeSchema } from './RatingCreateManyBookInputEnvelopeSchema';
import { RatingWhereUniqueInputSchema } from './RatingWhereUniqueInputSchema';

export const RatingUncheckedCreateNestedManyWithoutBookInputSchema: z.ZodType<Prisma.RatingUncheckedCreateNestedManyWithoutBookInput> = z.object({
  create: z.union([ z.lazy(() => RatingCreateWithoutBookInputSchema),z.lazy(() => RatingCreateWithoutBookInputSchema).array(),z.lazy(() => RatingUncheckedCreateWithoutBookInputSchema),z.lazy(() => RatingUncheckedCreateWithoutBookInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RatingCreateOrConnectWithoutBookInputSchema),z.lazy(() => RatingCreateOrConnectWithoutBookInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RatingCreateManyBookInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RatingWhereUniqueInputSchema),z.lazy(() => RatingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RatingUncheckedCreateNestedManyWithoutBookInputSchema;
