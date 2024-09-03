import { z } from 'zod';

const generateResponseSchema =
  (statusCode: number, resTitle: string) => (customMessage?: string) => ({
    description: resTitle,
    content: {
      'application/json': {
        schema: z
          .object({
            message: z.string().optional(),
          })
          .openapi({
            example: {
              message: customMessage || resTitle,
            },
          }),
      },
    },
  });

// SUCCESS
export const SUCCESS200 = (message?: string) => generateResponseSchema(200, 'OK')(message);

export const SUCCESS201 = (message?: string) => generateResponseSchema(201, 'Created')(message);

// REDIRECTION
export const SUCCESS302 = (message?: string) => generateResponseSchema(302, 'Found')(message);

// ERRORS
export const ERROR400 = (message?: string) => generateResponseSchema(400, 'Bad Request')(message);

export const ERROR401 = (message?: string) => generateResponseSchema(401, 'Unauthorized')(message);

export const ERROR403 = (message?: string) => generateResponseSchema(403, 'Forbidden')(message);

export const ERROR404 = (message?: string) => generateResponseSchema(404, 'Not Found')(message);

export const ERROR409 = (message?: string) => generateResponseSchema(409, 'Conflict')(message);

export const ERROR500 = (message?: string) =>
  generateResponseSchema(500, 'Internal Server Error')(message);
