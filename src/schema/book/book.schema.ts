import { z, TypeOf } from 'zod';

import { RatingSchema } from './rating.schema';

const currentYear = new Date().getFullYear();

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
