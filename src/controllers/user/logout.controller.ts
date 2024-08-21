/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyRequest, FastifyReply } from 'fastify';

/**
 * ========================================
 *         Disconnect to a user account
 * ========================================
 */
export const logout = async (req: FastifyRequest, res: FastifyReply) => {
  res.clearCookie('authToken', {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === 'production' ? 'lax' : 'none',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });

  res.status(200).send({ message: 'Logout successful' });
};
