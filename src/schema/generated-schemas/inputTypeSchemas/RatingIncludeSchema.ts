import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookArgsSchema } from "../outputTypeSchemas/BookArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const RatingIncludeSchema: z.ZodType<Prisma.RatingInclude> = z.object({
  book: z.union([z.boolean(),z.lazy(() => BookArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default RatingIncludeSchema;
