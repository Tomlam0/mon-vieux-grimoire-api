import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookFindManyArgsSchema } from "../outputTypeSchemas/BookFindManyArgsSchema"
import { RatingFindManyArgsSchema } from "../outputTypeSchemas/RatingFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  books: z.union([z.boolean(),z.lazy(() => BookFindManyArgsSchema)]).optional(),
  ratings: z.union([z.boolean(),z.lazy(() => RatingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default UserIncludeSchema;
