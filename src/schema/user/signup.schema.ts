import { z, TypeOf } from 'zod';

/**
 * ========================================
 *            Signup body schema
 * ========================================
 */
export const SignupSchema = z.object({
  // Email
  email: z.string().email({
    message: 'The email address provided is not valid. Please check and try again.',
  }),

  // Password
  password: z
    .string()
    .min(8, {
      message: 'The password must be at least 8 characters long.',
    })
    .refine((value) => /[a-z]/.test(value), {
      message: 'The password must contain at least one lowercase letter.',
    })
    .refine((value) => /[A-Z]/.test(value), {
      message: 'The password must contain at least one uppercase letter.',
    })
    .refine((value) => /\d/.test(value), {
      message: 'The password must contain at least one digit.',
    })
    .refine((value) => /[@$!%*?&#]/.test(value), {
      message: 'The password must contain at least one special character.',
    })
    .refine((value) => !/\s/.test(value), {
      message: 'The password must not contain spaces.',
    }),
});

/**
 * ========================================
 *            Signup 201 Response schema
 * ========================================
 */
export const SignupResponseSchema = z.object({
  message: z.string().openapi({ example: 'User created!' }),
});

/**
 * ========================================
 *     Infer types for controllers in Typescript
 * ========================================
 */
export type SignupRequest = TypeOf<typeof SignupSchema>;
