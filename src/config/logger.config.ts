import { PinoLoggerOptions } from 'fastify/types/logger';

const environmentConfigs = {
  development: {
    level: 'debug',
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: false,
        singleLine: false,
        ignore: 'pid,hostname,time',
      },
    },

    // Used to remove specific keys from the log output for better readability
    redact: {
      paths: ['req.hostname', 'req.remoteAddress', 'req.remotePort', 'reqId'],
      remove: true,
    },
  },

  production: true,
};

function getConfig(): PinoLoggerOptions | boolean {
  const env = process.env.NODE_ENV || 'development';

  switch (env) {
    case 'development':
      return environmentConfigs.development;
    case 'production':
      return environmentConfigs.production;
    default:
      return false;
  }
}

export default getConfig();
