import { z } from 'zod';

/////////////////////////////////////////
// RATING SCHEMA
/////////////////////////////////////////

export const RatingSchema = z.object({
  id: z.string().uuid(),
  bookId: z.string(),
  userId: z.string(),
  grade: z.number().int(),
});

export type Rating = z.infer<typeof RatingSchema>;

export default RatingSchema;
