/* eslint-disable @typescript-eslint/no-explicit-any */

import { FastifyRequest, FastifyReply } from 'fastify';
import bcrypt from 'bcrypt';

import { SignupRequest } from '@/schema/user/signup.schema';

/**
 * ========================================
 *        Create a new user account
 * ========================================
 */
export const signup = async (req: FastifyRequest, res: FastifyReply) => {
  const { email, password } = req.body as SignupRequest;

  // Email unicity error handler
  const existingUser = await req.server.prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return res.status(400).send({ message: 'Invalid credentials or account already exists.' });
  }

  const hash = await bcrypt.hash(password, 10);

  const confirmationToken = req.server.jwt.sign(
    { email, passwordHash: hash },
    { expiresIn: '24h' }
  );

  const confirmationUrl = `${process.env.ORIGIN}/api/auth/confirm?token=${confirmationToken}`;
  const fromSender = `Mon Vieux Grimoire <${process.env.SMTP_FROM}>`;

  // User need to confirm account with mail
  const mailOptions = {
    from: fromSender,
    to: email,
    subject: 'Veuillez confirmer votre adresse e-mail',
    html: `
        <h1>Bienvenue sur Mon Vieux Grimoire !</h1>
        <p>Merci de vous être inscrit. Veuillez confirmer votre adresse e-mail en cliquant sur le bouton ci-dessous :</p>
        <a href="${confirmationUrl}"
        style="display:inline-block; padding: 10px 20px; color: white; background-color: #4CAF50; text-decoration: none; border-radius: 5px;">
        Confirmer mon adresse e-mail</a>
        <p><strong>Note :</strong> Ce lien est valable pendant 24 heures. Après cette période, vous devrez recommencer le processus d'inscription.</p>
        <p>Si vous n'avez pas fait cette demande, veuillez ignorer cet e-mail.</p>
        <p>Merci !</p>
      `,
  };

  await req.server.mailer.sendMail(mailOptions);

  return res.status(201).send({
    message: 'A confirmation email has been sent. Please check your email to confirm your account.',
  });
};
