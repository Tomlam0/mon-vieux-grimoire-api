import { FastifyEnvOptions } from "@fastify/env";

const schema = {
  type: "object",
  required: ["PORT", "DATABASE_URL", "JWT_SECRET_KEY"],
  properties: {
    PORT: {
      type: "number",
      default: 4000,
    },

    // CORS
    ORIGIN: {
      type: "string",
    },
    CREDENTIALS: {
      type: "boolean",
    },

    DATABASE_URL: {
      type: "string",
    },

    JWT_SECRET_KEY: {
      type: "string",
    },

    // ENABLE_SWAGGER: {
    //   type: "boolean",
    //   default: true,
    // },
  },
};

const envConfig: FastifyEnvOptions = {
  confKey: "config",
  schema,
  dotenv: true,
};

export default envConfig;
