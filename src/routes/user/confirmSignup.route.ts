import { FastifyInstance } from 'fastify';
import { confirmSignup } from '@/controllers/user/confirmSignup.controller';
import { ConfirmSignupQuerySchema } from '@/schema/user/confirmSignup.schema';
import { SUCCESS201, ERROR400 } from '@/constants/response.constants';

const confirmSignupRoute = async (app: FastifyInstance) => {
  app.get('/confirm', {
    // Openapi doc
    schema: {
      tags: ['User'],
      summary: 'Finalize account signup after email confirmation',

      querystring: ConfirmSignupQuerySchema,

      response: {
        201: SUCCESS201('Your account has been created! Please login using your credentials.'),

        400: ERROR400('Your account has already been confirmed.'),
      },
    },

    handler: confirmSignup,
  });
};

export default confirmSignupRoute;
