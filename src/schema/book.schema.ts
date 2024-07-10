import { z, TypeOf } from 'zod';

const currentYear = new Date().getFullYear();

/**
 * ========================================
 *     Book rating input in user form
 * ========================================
 */
export const RatingInputSchema = z.object({
  grade: z
    .number()
    .int()
    .min(0, { message: 'La note doit être un entier positif.' })
    .max(5, { message: 'La note doit être au maximum de 5.' }),
});

/**
 * ========================================
 *        Book rating for database
 * ========================================
 */
const RatingSchema = RatingInputSchema.extend({
  userId: z.string({
    message: "L'ID de l'utilisateur doit être un ObjectId valide.",
  }),
});

/**
 * ========================================
 *        Book input in user form
 * ========================================
 */
export const BookInputSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Le titre ne peut pas être vide.' })
    .max(255, { message: 'Le titre ne peut pas dépasser 255 caractères.' }),

  author: z
    .string()
    .min(1, { message: "L'auteur ne peut pas être vide." })
    .max(255, {
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
    .max(currentYear, { message: "L'année ne peut pas être dans le futur." }),

  imageUrl: z
    .string()
    .url({ message: "L'URL de l'image doit être valide." })
    .max(2048, {
      message: "L'URL de l'image ne peut pas dépasser 2048 caractères.",
    }),

  ratings: z.array(RatingInputSchema).default([]),
});

/**
 * ========================================
 *           Book in database
 * ========================================
 */
export const BookSchema = BookInputSchema.extend({
  userId: z.string({
    message: "L'ID de l'utilisateur doit être un ObjectId valide.",
  }),

  ratings: z.array(RatingSchema).default([]),

  averageRating: z.number().min(0).max(5).default(0),
});

// Schema for the entire collection
export const BookArraySchema = z.array(BookSchema);

// Infer typescript types for controllers
export type BookInputRequest = TypeOf<typeof BookInputSchema>; // For a single book in user input
export type BookRequest = TypeOf<typeof BookSchema>; // For a single book in db
export type BookArrayRequest = TypeOf<typeof BookArraySchema>; // For all books in db
