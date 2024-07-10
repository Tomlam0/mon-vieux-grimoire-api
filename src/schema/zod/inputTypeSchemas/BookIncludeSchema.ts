import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const BookIncludeSchema: z.ZodType<Prisma.BookInclude> = z.object({
}).strict()

export default BookIncludeSchema;
