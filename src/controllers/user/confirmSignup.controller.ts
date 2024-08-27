/* eslint-disable @typescript-eslint/no-explicit-any */

import { FastifyRequest, FastifyReply } from 'fastify';

/**
 * ========================================
 *      Confirm user email for signup
 * ========================================
 */
export const confirmSignup = async (req: FastifyRequest, res: FastifyReply) => {
  const { token } = req.query as { token: string };

  // Verify the token
  const decoded = req.server.jwt.verify(token) as {
    email: string;
    passwordHash: string;
  };

  // Email unicity error handler
  const existingUser = await req.server.prisma.user.findUnique({
    where: { email: decoded.email },
  });

  if (existingUser) {
    res.status(400).send({ message: 'Your account has already been confirmed.' });
  }

  // Create the user in the database
  await req.server.prisma.user.create({
    data: {
      email: decoded.email,
      password: decoded.passwordHash,
    },
  });

  res.status(201).send({
    message: 'Your account has been created! Please login using your credentials.',
  });
};
