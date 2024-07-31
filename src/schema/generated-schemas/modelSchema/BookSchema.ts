import { z } from 'zod';

/////////////////////////////////////////
// BOOK SCHEMA
/////////////////////////////////////////

export const BookSchema = z.object({
  id: z.string().uuid(),
  userId: z.string(),
  title: z.string(),
  author: z.string(),
  imageUrl: z.string(),
  year: z.number().int(),
  genre: z.string(),
  averageRating: z.number(),
});

export type Book = z.infer<typeof BookSchema>;

export default BookSchema;
