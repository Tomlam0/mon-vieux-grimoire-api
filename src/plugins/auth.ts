import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';
import fp from 'fastify-plugin';
import jwt from '@fastify/jwt';

interface JwtPayload {
  userId: string;
}

const auth: FastifyPluginAsync = async (app) => {
  app.register(jwt, {
    secret: process.env.JWT_SECRET_KEY!,
  });

  app.decorate('auth', async (req: FastifyRequest, res: FastifyReply) => {
    try {
      const token = req.cookies.authToken;

      if (!token) throw new Error('Aucun token fourni');

      const decoded = app.jwt.verify<JwtPayload>(token);

      // Extract userId from jwt payload and attach it to the request object
      req.user = decoded.userId;
    } catch (err) {
      res.status(401).send({
        message: 'Access denied. Please log in.',
      });
    }
  });
};

export default fp(auth);
