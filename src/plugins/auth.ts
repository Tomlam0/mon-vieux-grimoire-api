import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import fp from 'fastify-plugin';
import jwt from '@fastify/jwt';

interface JwtPayload {
  userId: string;
}

const auth = async (app: FastifyInstance) => {
  app.register(jwt, {
    secret: process.env.JWT_SECRET_KEY!,
  });

  app.decorate('auth', async (req: FastifyRequest, res: FastifyReply) => {
    try {
      const token = req.cookies.authToken;

      if (!token) throw new Error('Aucun token fourni');

      const decoded = await app.jwt.verify<JwtPayload>(token);

      // Extract userId from jwt payload and attach it to the request object
      req.user = decoded.userId;
    } catch (err) {
      res.status(401).send({
        statusCode: 401,
        error: 'Unauthorized',
        message: 'Accès refusé. Veuillez vous connecter.',
      });
    }
  });
};

export default fp(auth);
