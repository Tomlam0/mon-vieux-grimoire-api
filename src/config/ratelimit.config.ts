export const userRateLimitOptions = {
  // Rate limit for account creation
  signup: {
    max: 5,
    timeWindow: '1 minute',
    errorResponseBuilder: () => {
      return {
        statusCode: 429,
        error: 'Trop de requêtes',
        message:
          'Vous avez atteint la limite de créations de comptes ! Veuillez réessayer dans 1 minute.',
      };
    },
  },

  //   Rate limit for login
  login: {
    max: 10,
    timeWindow: '1 minute',
    errorResponseBuilder: () => {
      return {
        statusCode: 429,
        error: 'Trop de requêtes',
        message:
          'Vous avez atteint la limite de tentatives de connexion ! Veuillez réessayer dans 1 minute.',
      };
    },
  },
};
