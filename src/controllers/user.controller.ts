import { FastifyRequest, FastifyReply } from "fastify";
import bcrypt from "bcrypt";

import prisma from "../lib/prisma";
import { SignupRequest, LoginRequest } from "../schema/user.schema";

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

    res.status(201).send({ message: "Utilisateur créé !" });
  } catch (error: any) {
    // Email unicity error handler
    if (error.code === "P2002" && error.meta?.target.includes("email")) {
      res.status(400).send({ message: "L'adresse e-mail est déjà utilisée." });
    } else {
      res.status(500).send({ error: error });
    }
  }
};

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

    // Set HttpOnly cookie to avoid XSS attack
    res.setCookie("authToken", token, {
      httpOnly: true,
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
