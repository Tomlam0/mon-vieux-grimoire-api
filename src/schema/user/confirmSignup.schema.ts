import { z } from 'zod';

export const ConfirmSignupQuerySchema = z.object({
  token: z
    .string()
    .min(1, 'The token is required')
    .describe('The JWT token provided in the email link for account confirmation.'),
});
