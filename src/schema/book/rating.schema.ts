import { z, TypeOf } from 'zod';

/**
 * ========================================
 *        Add new rating schema
 * ========================================
 */
export const RatingSchema = z.object({
  grade: z
    .number()
    .min(1, { message: 'The rating must be at least 1.' })
    .max(5, { message: 'The rating must be at most 5.' }),
});

/**
 * ========================================
 *     Infer types for controllers in Typescript
 * ========================================
 */
export type RatingSchemaRequest = TypeOf<typeof RatingSchema>;