import { z } from "zod";

// Create a new user account
export const signupSchema = z.object({
  body: z.object({
    email: z.string().email({
      message:
        "L'adresse e-mail saisie n'est pas valide pour l'inscription. Veuillez vérifier et essayer à nouveau.",
    }),

    password: z.string().min(8, {
      message: "Le mot de passe doit contenir au moins 8 caractères.",
    }),
  }),
});

// Log to an user account
export const loginSchema = z.object({
  body: z.object({
    email: z.string().email({
      message:
        "L'adresse e-mail saisie n'est pas valide pour la connexion. Veuillez vérifier et essayer à nouveau.",
    }),
    
    password: z.string().min(1, {
      message: "Le mot de passe ne peut pas être vide.",
    }),
  }),
});
