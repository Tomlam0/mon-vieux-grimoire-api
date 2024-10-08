/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyRequest, FastifyReply } from 'fastify';
import bcrypt from 'bcrypt';

import { LoginRequest } from '@/schema/user/index';

/**
 * ========================================
 *         Connect to a user account
 * ========================================
 */
export const login = async (req: FastifyRequest, res: FastifyReply) => {
  const { email, password } = req.body as LoginRequest;

  const user = await req.server.prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      password: true,
    },
  });

  // Handle cases where the user does not exist or does not have a password (OAuth user)
  if (!user || !user.password) {
    return res.status(401).send({
      message: 'Invalid email or password. Please try again.',
    });
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return res.status(401).send({
      message: 'Invalid email or password. Please try again.',
    });
  }

  // Generate JWT with userId in payload
  const token = req.server.jwt.sign({ userId: user.id }, { expiresIn: '4h' });

  res.setCookie('authToken', token, {
    httpOnly: true, // Set httpOnly to avoid XSS attack, cookie only accessible by fetch
    sameSite: process.env.NODE_ENV === 'production' ? 'lax' : 'none', // Protect against CSRF
    secure: process.env.NODE_ENV === 'production', // Ensure secure flag is set in production
    maxAge: 4 * 60 * 60, // 4 hours
    path: '/',
  });

  return res.status(200).send({
    userId: user.id,
  });
};
