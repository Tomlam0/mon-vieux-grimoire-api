/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyRequest, FastifyReply } from 'fastify';
import bcrypt from 'bcrypt';

import prisma from '@lib/prisma';
import { SignupRequest } from '@schema/user.schema';

/**
 * ========================================
 *        Create a new user account
 * ========================================
 */
export const signup = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    const { email, password } = req.body as SignupRequest;

    // Hash the password
    const hash = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        password: hash,
      },
    });

    res.status(201).send({ message: 'Utilisateur créé !' });
  } catch (error: any) {
    // Email unicity error handler
    if (error.code === 'P2002' && error.meta?.target.includes('email')) {
      res.status(400).send({ message: "L'adresse e-mail est déjà utilisée." });
    } else {
      res.status(500).send({ error: (error as Error).message });
    }
  }
};
