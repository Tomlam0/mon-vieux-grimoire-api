import { z } from 'zod';

/**
 * ========================================
 *            Logout 200 Response schema
 * ========================================
 */
export const LogoutResponseSchema = z.object({
  message: z.string().openapi({ example: 'Logout successful' }),
});
