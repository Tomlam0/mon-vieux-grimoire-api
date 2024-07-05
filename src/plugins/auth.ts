import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import fp from "fastify-plugin";
import jwt from "@fastify/jwt";

const auth = async (app: FastifyInstance) => {
  app.register(jwt, {
    secret: process.env.JWT_SECRET_KEY!,
  });

  app.decorate("auth", async (req: FastifyRequest, res: FastifyReply) => {
    try {
      await req.jwtVerify();
    } catch (err) {
      res.status(401).send({
        statusCode: 401,
        error: "Unauthorized",
        message: "Accès refusé. Veuillez vous connecter.",
      });
    }
  });
};

export default fp(auth);
