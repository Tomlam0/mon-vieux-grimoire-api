import { FastifyInstance } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    config: {
      NODE_ENV: "development" | "production";

      PORT: number;

      // CORS
      ORIGIN: string;
      CREDENTIALS: boolean;

      DATABASE_URL: string;

      JWT_SECRET_KEY: string;

      // ENABLE_SWAGGER: boolean;
    };
  }
}
