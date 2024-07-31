/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyRequest, FastifyReply } from 'fastify';

/**
 * ========================================
 *         Disconnect to a user account
 * ========================================
 */
export const logout = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    res.clearCookie('authToken', {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 0,
      path: '/',
    });

    res.status(200).send({ message: 'Déconnexion réussie' });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};
