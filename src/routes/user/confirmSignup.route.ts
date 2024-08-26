import { FastifyInstance } from 'fastify';
import { confirmSignup } from '@/controllers/user/confirmSignup.controller';
import { ERROR400 } from '@/constants/response.constants';

const confirmSignupRoute = async (app: FastifyInstance) => {
  app.get('/confirm', {
    // Openapi doc
    schema: {
      tags: ['User'],
      summary: 'Finalize account signup after email confirmation',

      //   querystring: {
      //     type: 'object',
      //     properties: {
      //       token: {
      //         description: 'The JWT token provided in the email link for account confirmation.',
      //       },
      //     },
      //   },

      response: {
        // 201: {
        //   description: 'Created',
        //   content: {
        //     'application/json': {
        //       schema: {
        //         type: 'object',
        //         properties: {
        //           message: {
        //             type: 'string',
        //             example: 'Your account has been created!',
        //           },
        //         },
        //       },
        //     },
        //   },
        // },
        400: ERROR400('Your account has already been confirmed.'),
      },
    },

    handler: confirmSignup,
  });
};

export default confirmSignupRoute;
