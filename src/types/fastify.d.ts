import { EnvSchema } from "@/config/env.config";

declare module "fastify" {
  interface FastifyInstance {
    // Holds configuration values loaded from environment variables.
    config: EnvSchema;
    // auth is used to verify JWT tokens and handle authentication.
    auth: (req: FastifyRequest, res: FastifyReply) => Promise<void>;
  }
}
