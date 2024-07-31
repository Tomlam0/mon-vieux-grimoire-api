import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookSelectSchema } from '../inputTypeSchemas/BookSelectSchema';
import { BookIncludeSchema } from '../inputTypeSchemas/BookIncludeSchema';

export const BookArgsSchema: z.ZodType<Prisma.BookDefaultArgs> = z
  .object({
    select: z.lazy(() => BookSelectSchema).optional(),
    include: z.lazy(() => BookIncludeSchema).optional(),
  })
  .strict();

export default BookArgsSchema;
