import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingSelectSchema } from '../inputTypeSchemas/RatingSelectSchema';
import { RatingIncludeSchema } from '../inputTypeSchemas/RatingIncludeSchema';

export const RatingArgsSchema: z.ZodType<Prisma.RatingDefaultArgs> = z.object({
  select: z.lazy(() => RatingSelectSchema).optional(),
  include: z.lazy(() => RatingIncludeSchema).optional(),
}).strict();

export default RatingArgsSchema;
