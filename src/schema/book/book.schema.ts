import { z, TypeOf } from 'zod';

import { RatingSchema } from './rating.schema';

const CURRENT_YEAR = new Date().getFullYear();
const MIME_TYPE = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

/**
 * ========================================
 *        Book input schema
 * ========================================
 */
export const BookSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'The title cannot be empty.' })
    .max(255, { message: 'The title cannot exceed 255 characters.' }),

  author: z
    .string()
    .min(1, { message: 'The author cannot be empty.' })
    .max(255, { message: 'The author name cannot exceed 255 characters.' }),

  genre: z
    .string()
    .min(1, { message: 'The genre cannot be empty.' })
    .max(100, { message: 'The genre cannot exceed 100 characters.' }),

  year: z
    .number()
    .int()
    .min(-3000, { message: 'The year must be a valid integer.' })
    .max(CURRENT_YEAR, { message: 'The year cannot be in the future.' }),

  ratings: z.array(RatingSchema).nonempty({ message: 'At least one rating is required.' }),

  file: z.object({
    filename: z.string(),
    size: z.number().max(2000000, { message: 'The maximum image size is 2MB.' }),
    mimetype: z
      .string()
      .refine(
        (type) => MIME_TYPE.includes(type),
        'Only .jpg, .jpeg, .png, and .webp formats are supported.'
      ),
    buffer: z.instanceof(Buffer),
  }),
});

/**
 * ========================================
 *       Create Book response schema
 * ========================================
 */
export const CreateBookResponseSchema = BookSchema.omit({ file: true }).extend({
  averageRating: z.number(),
  imageUrl: z.string(),
  id: z.string().uuid(),
});

/**
 * ========================================
 *       Get Book response schema (also exclude grades)
 * ========================================
 */
export const GetBookResponseSchema = BookSchema.omit({ ratings: true, file: true }).extend({
  averageRating: z.number(),
  imageUrl: z.string(),
  id: z.string().uuid(),
  userId: z.string(),
});

/**
 * ========================================
 *   Get All Books Paginated response schema
 * ========================================
 */
export const GetAllBooksSchema = z.object({
  totalBooks: z.number(),
  totalPages: z.number(),
  currentPage: z.number(),
  books: z.array(GetBookResponseSchema),
});

/**
 * ========================================
 *  Schema for an array of books (used for retrieving all books)
 * ========================================
 */
export const BookArraySchema = z.array(GetBookResponseSchema);

/**
 * ========================================
 *     Infer types for controllers in Typescript
 * ========================================
 */
export type BookRequest = TypeOf<typeof BookSchema>; // For a single book in db
export type BookArrayRequest = TypeOf<typeof BookArraySchema>; // For all books in db
