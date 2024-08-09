import { z, TypeOf } from 'zod';

/**
 * ========================================
 *            Login body schema
 * ========================================
 */
export const LoginBodySchema = z.object({
  email: z.string().email({
    message: "L'adresse e-mail saisie n'est pas valide. Veuillez vérifier et essayer à nouveau.",
  }),

  password: z.string().min(1, {
    message: 'Le mot de passe ne peut pas être vide.',
  }),
});

/**
 * ========================================
 *            Login 200 Response schema
 * ========================================
 */
export const LoginResponseSchema = z.object({
  userId: z.string().openapi({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' }),
});

/**
 * ========================================
 *     Infer types for controllers in Typescript
 * ========================================
 */
export type LoginRequest = TypeOf<typeof LoginBodySchema>;
