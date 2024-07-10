import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutBooksInputSchema } from './UserUpdateWithoutBooksInputSchema';
import { UserUncheckedUpdateWithoutBooksInputSchema } from './UserUncheckedUpdateWithoutBooksInputSchema';

export const UserUpdateToOneWithWhereWithoutBooksInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBooksInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutBooksInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBooksInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutBooksInputSchema;
