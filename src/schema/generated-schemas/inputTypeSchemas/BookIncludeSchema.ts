import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { RatingFindManyArgsSchema } from "../outputTypeSchemas/RatingFindManyArgsSchema"
import { BookCountOutputTypeArgsSchema } from "../outputTypeSchemas/BookCountOutputTypeArgsSchema"

export const BookIncludeSchema: z.ZodType<Prisma.BookInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  ratings: z.union([z.boolean(),z.lazy(() => RatingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BookCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default BookIncludeSchema;
