import { z, TypeOf } from 'zod';

import { RatingSchema } from './rating.schema';

const CURRENT_YEAR = new Date().getFullYear();
const MIME_TYPE = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

/**
 * ========================================
 *        Add new book schema
 * ========================================
 */
export const BookSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Le titre ne peut pas être vide.' })
    .max(255, { message: 'Le titre ne peut pas dépasser 255 caractères.' }),

  author: z.string().min(1, { message: "L'auteur ne peut pas être vide." }).max(255, {
    message: "Le nom de l'auteur ne peut pas dépasser 255 caractères.",
  }),

  genre: z
    .string()
    .min(1, { message: 'Le genre ne peut pas être vide.' })
    .max(100, { message: 'Le genre ne peut pas dépasser 100 caractères.' }),

  year: z
    .number()
    .int()
    .min(-3000, { message: "L'année doit être un entier valide." })
    .max(CURRENT_YEAR, { message: "L'année ne peut pas être dans le futur." }),

  image: z.object({
    filename: z.string(),
    size: z.number().max(2000000, { message: "La taille maximale de l'image est de 2MB." }),
    mimetype: z
      .string()
      .refine(
        (type) => MIME_TYPE.includes(type),
        'Seuls les formats .jpg, .jpeg, .png et .webp sont supportés.'
      ),
    buffer: z.instanceof(Buffer).or(z.string()),
  }),

  ratings: z.array(RatingSchema),
});

/**
 * ========================================
 *  Book response schema (includes id and averageRating)
 * ========================================
 */
export const BookResponseSchema = BookSchema.extend({
  id: z.string().uuid(),
  averageRating: z.number(),
});

/**
 * ========================================
 *        Schema for the entire collection
 * ========================================
 */
export const BookArraySchema = z.array(BookSchema);

/**
 * ========================================
 *     Infer types for controllers in Typescript
 * ========================================
 */
export type BookRequest = TypeOf<typeof BookSchema>; // For a single book in db
export type BookArrayRequest = TypeOf<typeof BookArraySchema>; // For all books in db
