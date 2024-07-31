import { FastifyCorsOptions } from '@fastify/cors';

export default function getCorsConfig(): FastifyCorsOptions {
  return {
    origin: process.env.ORIGIN,

    credentials: process.env.CREDENTIALS === 'true',

    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],

    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],

    exposedHeaders: ['Content-Length', 'Date', 'X-Request-Id'],
  };
}
