import { z } from 'zod';

const ErrorSchema = z.object({
  message: z.string(),
});

export const ERROR400 = {
  description: 'Bad request',
  content: {
    'application/json': {
      schema: ErrorSchema.openapi({
        example: { message: 'Invalid request parameters' },
      }),
    },
  },
};

export const ERROR401 = {
  description: 'Unauthorized',
  content: {
    'application/json': {
      schema: ErrorSchema.openapi({
        example: { message: 'Unauthorized access' },
      }),
    },
  },
};

export const ERROR403 = {
  description: 'Forbidden Request',
  content: {
    'application/json': {
      schema: ErrorSchema.openapi({
        example: { message: 'Forbidden request' },
      }),
    },
  },
};

export const ERROR404 = {
  description: 'Not found',
  content: {
    'application/json': {
      schema: ErrorSchema.openapi({
        example: { message: 'Resource not found' },
      }),
    },
  },
};

export const ERROR409 = {
  description: 'Conflict',
  content: {
    'application/json': {
      schema: ErrorSchema.openapi({
        example: { message: 'Resource conflict' },
      }),
    },
  },
};

export const ERROR500 = {
  description: 'Internal Server Error',
  content: {
    'application/json': {
      schema: ErrorSchema.openapi({
        example: { message: 'Internal server error' },
      }),
    },
  },
};
