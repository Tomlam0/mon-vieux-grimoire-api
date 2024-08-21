import { z, TypeOf } from 'zod';

/**
 * ========================================
 *            Login body schema
 * ========================================
 */
export const LoginBodySchema = z.object({
  email: z.string().email({
    message: 'The email address provided is not valid. Please check and try again.',
  }),

  password: z.string().min(1, {
    message: 'The password cannot be empty.',
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
