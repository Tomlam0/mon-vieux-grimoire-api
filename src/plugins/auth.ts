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
      // First verify directly with cookie
      let token = req.cookies.authToken;

      // If there's no cookie, verify with headers
      if (!token) {
        token = req.headers.authtoken as string;
      }

      if (!token) throw new Error('No token provided');

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
