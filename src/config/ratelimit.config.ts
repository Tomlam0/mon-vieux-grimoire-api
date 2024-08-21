export const userRateLimitOptions = {
  // Rate limit for account creation
  signup: {
    max: 5,
    timeWindow: '1 minute',
    errorResponseBuilder: () => ({
      statusCode: 429,
      message: 'You have reached the login attempt limit! Please try again in 1 minute.',
    }),
  },

  //   Rate limit for login
  login: {
    max: 10,
    timeWindow: '1 minute',
    errorResponseBuilder: () => ({
      statusCode: 429,
      message: 'You have reached the login attempt limit! Please try again in 1 minute.',
    }),
  },

  // Rate limit for adding a new book
  addBook: {
    max: 5,
    timeWindow: '1 minute',
    errorResponseBuilder: () => ({
      statusCode: 429,
      message: 'You have reached the login attempt limit! Please try again in 1 minute.',
    }),
  },
};
