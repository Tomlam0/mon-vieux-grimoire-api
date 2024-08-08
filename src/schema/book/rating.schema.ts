import { z, TypeOf } from 'zod';

/**
 * ========================================
 *        Add new rating schema
 * ========================================
 */
export const RatingSchema = z.object({
  grade: z
    .number()
    .min(1, { message: 'La note doit être au moins 1.' })
    .max(5, { message: 'La note doit être au plus 5.' }),
});

/**
 * ========================================
 *     Infer types for controllers in Typescript
 * ========================================
 */
export type RatingSchemaRequest = TypeOf<typeof RatingSchema>;
