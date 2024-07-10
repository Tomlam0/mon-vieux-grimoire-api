import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// BOOK SCHEMA
/////////////////////////////////////////

export const BookSchema = z.object({
  id: z.string(),
  userId: z.string(),
  title: z.string(),
  author: z.string(),
  genre: z.string(),
  year: z.number().int(),
  imageUrl: z.string(),
  averageRating: JsonValueSchema,
})

export type Book = z.infer<typeof BookSchema>

export default BookSchema;
