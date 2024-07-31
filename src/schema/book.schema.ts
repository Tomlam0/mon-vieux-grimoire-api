import { z, TypeOf } from 'zod';

const currentYear = new Date().getFullYear();

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
    .max(currentYear, { message: "L'année ne peut pas être dans le futur." }),

  imageUrl: z.string().url({ message: "L'URL de l'image doit être valide." }).max(2048, {
    message: "L'URL de l'image ne peut pas dépasser 2048 caractères.",
  }),

  ratings: z.array(RatingSchema).default([]),
});

// Schema for the entire collection
export const BookArraySchema = z.array(BookSchema);

// Infer typescript types for controllers
export type BookRequest = TypeOf<typeof BookSchema>; // For a single book in db
export type BookArrayRequest = TypeOf<typeof BookArraySchema>; // For all books in db
