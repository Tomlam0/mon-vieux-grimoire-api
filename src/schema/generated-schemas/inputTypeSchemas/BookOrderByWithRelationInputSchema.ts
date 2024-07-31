import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { RatingOrderByRelationAggregateInputSchema } from './RatingOrderByRelationAggregateInputSchema';

export const BookOrderByWithRelationInputSchema: z.ZodType<Prisma.BookOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    author: z.lazy(() => SortOrderSchema).optional(),
    imageUrl: z.lazy(() => SortOrderSchema).optional(),
    year: z.lazy(() => SortOrderSchema).optional(),
    genre: z.lazy(() => SortOrderSchema).optional(),
    averageRating: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
    ratings: z.lazy(() => RatingOrderByRelationAggregateInputSchema).optional(),
  })
  .strict();

export default BookOrderByWithRelationInputSchema;
