import { z, TypeOf } from "zod";

/**
 * ========================================
 *            Book schema
 * ========================================
 */
export const bookRatingSchema = z.object({
  id: z.string().min(1, { message: "L'identifiant ne peut pas être vide." }),
  userId: z
    .string()
    .min(1, { message: "L'identifiant utilisateur ne peut pas être vide." }),
  grade: z
    .number()
    .int()
    .min(0, { message: "La note doit être un entier positif." }),
});

export const bookSchema = z.object({
  id: z.string().min(1, { message: "L'identifiant ne peut pas être vide." }),
  userId: z
    .string()
    .min(1, { message: "L'identifiant utilisateur ne peut pas être vide." }),
  title: z.string().min(1, { message: "Le titre ne peut pas être vide." }),
  author: z.string().min(1, { message: "L'auteur ne peut pas être vide." }),
  genre: z.string().min(1, { message: "Le genre ne peut pas être vide." }),
  year: z
    .number()
    .int()
    .min(0, { message: "L'année doit être un entier positif." }),
  imageUrl: z.string().url({ message: "L'URL de l'image doit être valide." }),
  ratings: z.array(bookRatingSchema),
  averageRating: z
    .number()
    .min(0, { message: "La note moyenne doit être un nombre positif." }),
});

// Schema for the entire collection
export const bookArraySchema = z.array(bookSchema);

// Infer types for controllers
export type Book = TypeOf<typeof bookSchema>; // For a single book
export type BookArray = TypeOf<typeof bookArraySchema>; // For all books
