import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookCreateWithoutUserInputSchema } from './BookCreateWithoutUserInputSchema';
import { BookUncheckedCreateWithoutUserInputSchema } from './BookUncheckedCreateWithoutUserInputSchema';
import { BookCreateOrConnectWithoutUserInputSchema } from './BookCreateOrConnectWithoutUserInputSchema';
import { BookUpsertWithWhereUniqueWithoutUserInputSchema } from './BookUpsertWithWhereUniqueWithoutUserInputSchema';
import { BookCreateManyUserInputEnvelopeSchema } from './BookCreateManyUserInputEnvelopeSchema';
import { BookWhereUniqueInputSchema } from './BookWhereUniqueInputSchema';
import { BookUpdateWithWhereUniqueWithoutUserInputSchema } from './BookUpdateWithWhereUniqueWithoutUserInputSchema';
import { BookUpdateManyWithWhereWithoutUserInputSchema } from './BookUpdateManyWithWhereWithoutUserInputSchema';
import { BookScalarWhereInputSchema } from './BookScalarWhereInputSchema';

export const BookUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.BookUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookCreateWithoutUserInputSchema),z.lazy(() => BookCreateWithoutUserInputSchema).array(),z.lazy(() => BookUncheckedCreateWithoutUserInputSchema),z.lazy(() => BookUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookCreateOrConnectWithoutUserInputSchema),z.lazy(() => BookCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => BookUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookWhereUniqueInputSchema),z.lazy(() => BookWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookWhereUniqueInputSchema),z.lazy(() => BookWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookWhereUniqueInputSchema),z.lazy(() => BookWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookWhereUniqueInputSchema),z.lazy(() => BookWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => BookUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => BookUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookScalarWhereInputSchema),z.lazy(() => BookScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookUncheckedUpdateManyWithoutUserNestedInputSchema;
