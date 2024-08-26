import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import nodemailer from 'nodemailer';

async function createTransporter() {
  if (process.env.NODE_ENV === 'production') {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  // Ethereal account for testing purposes
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

const nodemailerPlugin: FastifyPluginAsync = async (app) => {
  const transporter = await createTransporter();

  app.decorate('mailer', transporter);
};

export default fp(nodemailerPlugin);
