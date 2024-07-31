import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const BookCountOutputTypeSelectSchema: z.ZodType<Prisma.BookCountOutputTypeSelect> = z
  .object({
    ratings: z.boolean().optional(),
  })
  .strict();

export default BookCountOutputTypeSelectSchema;
