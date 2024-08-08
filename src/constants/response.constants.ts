export const ERROR400 = {
  description: 'Bad request',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Invalid request parameters',
          },
        },
      },
    },
  },
};

export const ERROR401 = {
  description: 'Unauthorized',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Unauthorized access',
          },
        },
      },
    },
  },
};

export const ERROR403 = {
  description: 'Forbidden Request',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Forbidden request',
          },
        },
      },
    },
  },
};

export const ERROR404 = {
  description: 'Not found',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Resource not found',
          },
        },
      },
    },
  },
};

export const ERROR409 = {
  description: 'Conflict',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Resource conflict',
          },
        },
      },
    },
  },
};

export const ERROR500 = {
  description: 'Internal Server Error',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Internal server error',
          },
        },
      },
    },
  },
};
