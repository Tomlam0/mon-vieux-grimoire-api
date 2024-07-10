import { z } from 'zod';

/////////////////////////////////////////
// BOOK RATING SCHEMA
/////////////////////////////////////////

export const BookRatingSchema = z.object({
  id: z.string(),
  userId: z.string(),
  grade: z.number().int(),
})

export type BookRating = z.infer<typeof BookRatingSchema>

export default BookRatingSchema;
