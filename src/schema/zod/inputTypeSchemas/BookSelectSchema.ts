import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookRatingArgsSchema } from "../outputTypeSchemas/BookRatingArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const BookSelectSchema: z.ZodType<Prisma.BookSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  title: z.boolean().optional(),
  author: z.boolean().optional(),
  genre: z.boolean().optional(),
  year: z.boolean().optional(),
  imageUrl: z.boolean().optional(),
  ratings: z.union([z.boolean(),z.lazy(() => BookRatingArgsSchema)]).optional(),
  averageRating: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default BookSelectSchema;
