import { z, TypeOf } from 'zod';

/**
 * ========================================
 *            Signup schema
 * ========================================
 */
export const SignupSchema = z.object({
  body: z.object({
    email: z.string().email({
      message:
        "L'adresse e-mail saisie n'est pas valide. Veuillez vérifier et essayer à nouveau.",
    }),
    password: z
      .string()
      .min(8, {
        message: 'Le mot de passe doit contenir au moins 8 caractères.',
      })
      .refine((value) => /[a-z]/.test(value), {
        message: 'Le mot de passe doit contenir au moins une lettre minuscule.',
      })
      .refine((value) => /[A-Z]/.test(value), {
        message: 'Le mot de passe doit contenir au moins une lettre majuscule.',
      })
      .refine((value) => /\d/.test(value), {
        message: 'Le mot de passe doit contenir au moins un chiffre.',
      })
      .refine((value) => /[@$!%*?&#]/.test(value), {
        message: 'Le mot de passe doit contenir au moins un caractère spécial.',
      })
      .refine((value) => !/\s/.test(value), {
        message: "Le mot de passe ne doit pas contenir d'espaces.",
      }),
  }),
});

/**
 * ========================================
 *            Login schema
 * ========================================
 */
export const LoginSchema = z.object({
  body: z.object({
    email: z.string().email({
      message:
        "L'adresse e-mail saisie n'est pas valide. Veuillez vérifier et essayer à nouveau.",
    }),

    password: z.string().min(1, {
      message: 'Le mot de passe ne peut pas être vide.',
    }),
  }),
});

// Infer types for controllers
export type SignupRequest = TypeOf<typeof SignupSchema>['body'];
export type LoginRequest = TypeOf<typeof LoginSchema>['body'];
