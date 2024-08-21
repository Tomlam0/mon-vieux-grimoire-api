import { z, TypeOf } from 'zod';

import { RatingSchema } from './rating.schema';

const CURRENT_YEAR = new Date().getFullYear();
const MIME_TYPE = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

/**
 * ========================================
 *        Book creation schema (text fields only)
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
});

/**
 * ========================================
 *      Image schema (for file validation)
 * ========================================
 */
export const ImageValidationSchema = z.object({
  filename: z.string(),
  size: z.number().max(2000000, { message: 'The maximum image size is 2MB.' }),
  mimetype: z
    .string()
    .refine(
      (type) => MIME_TYPE.includes(type),
      'Only .jpg, .jpeg, .png, and .webp formats are supported.'
    ),
  buffer: z.instanceof(Buffer),
});

/**
 * ========================================
 *  Combined book request validation schema (multipart)
 * ========================================
 */
export const BookMultipartSchema = z.object({
  body: BookSchema,
  file: ImageValidationSchema,
});

/**
 * ========================================
 *  Book response schema (includes id, imageurl and averageRating)
 * ========================================
 */
export const BookResponseSchema = BookSchema.extend({
  id: z.string().uuid(),
  imageUrl: z.string(),
  averageRating: z.number(),
});

/**
 * ========================================
 *  Schema for an array of books (used for retrieving all books)
 * ========================================
 */
export const BookArraySchema = z.array(BookResponseSchema);

/**
 * ========================================
 *     Infer types for controllers in Typescript
 * ========================================
 */
export type BookRequest = TypeOf<typeof BookSchema>; // For a single book in db
export type BookArrayRequest = TypeOf<typeof BookArraySchema>; // For all books in db