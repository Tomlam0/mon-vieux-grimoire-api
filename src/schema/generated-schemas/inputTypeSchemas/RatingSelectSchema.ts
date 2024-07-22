import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookArgsSchema } from "../outputTypeSchemas/BookArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const RatingSelectSchema: z.ZodType<Prisma.RatingSelect> = z.object({
  id: z.boolean().optional(),
  bookId: z.boolean().optional(),
  userId: z.boolean().optional(),
  grade: z.boolean().optional(),
  book: z.union([z.boolean(),z.lazy(() => BookArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default RatingSelectSchema;
