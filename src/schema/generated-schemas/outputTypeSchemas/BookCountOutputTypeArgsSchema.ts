import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookCountOutputTypeSelectSchema } from './BookCountOutputTypeSelectSchema';

export const BookCountOutputTypeArgsSchema: z.ZodType<Prisma.BookCountOutputTypeDefaultArgs> = z
  .object({
    select: z.lazy(() => BookCountOutputTypeSelectSchema).nullish(),
  })
  .strict();

export default BookCountOutputTypeSelectSchema;
