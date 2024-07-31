import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema';
import { RatingFindManyArgsSchema } from '../outputTypeSchemas/RatingFindManyArgsSchema';
import { BookCountOutputTypeArgsSchema } from '../outputTypeSchemas/BookCountOutputTypeArgsSchema';

export const BookSelectSchema: z.ZodType<Prisma.BookSelect> = z
  .object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    title: z.boolean().optional(),
    author: z.boolean().optional(),
    imageUrl: z.boolean().optional(),
    year: z.boolean().optional(),
    genre: z.boolean().optional(),
    averageRating: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    ratings: z.union([z.boolean(), z.lazy(() => RatingFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => BookCountOutputTypeArgsSchema)]).optional(),
  })
  .strict();

export default BookSelectSchema;
