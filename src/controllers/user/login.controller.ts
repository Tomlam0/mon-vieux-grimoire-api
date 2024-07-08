import { FastifyRequest, FastifyReply } from "fastify";
import bcrypt from "bcrypt";

import prisma from "../../lib/prisma";
import { LoginRequest } from "../../schema/user.schema";

/**
 * ========================================
 *         Connect to a user account
 * ========================================
 */
export const login = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    const { email, password } = req.body as LoginRequest;

    // Find user with unique email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Verify if user exist on db
    if (!user) {
      return res.status(401).send({
        message: "Paire identifiant / mot de passe incorrect",
      });
    }

    // Compare password
    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return res.status(401).send({
        message: "Paire identifiant / mot de passe incorrect",
      });
    }

    // Generate JWT
    const token = req.server.jwt.sign({ userId: user.id }, { expiresIn: "4h" });

    res.setCookie("authToken", token, {
      httpOnly: true, // Set HttpOnly cookie to avoid XSS attack
      sameSite: "lax", // Protect against CSRF
      secure: process.env.NODE_ENV === "production", // Ensure secure flag is set in production
      maxAge: 4 * 60 * 60, // 4 hours
      path: "/",
    });

    res.status(200).send({
      userId: user.id,
    });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};
