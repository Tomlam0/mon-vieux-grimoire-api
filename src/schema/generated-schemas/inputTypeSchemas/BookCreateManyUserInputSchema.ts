import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BookCreateManyUserInputSchema: z.ZodType<Prisma.BookCreateManyUserInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  author: z.string(),
  imageUrl: z.string(),
  year: z.number(),
  genre: z.string(),
  averageRating: z.number()
}).strict();

export default BookCreateManyUserInputSchema;
