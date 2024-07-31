import { FastifyRequest, FastifyReply } from 'fastify';
import * as dotenv from 'dotenv';

dotenv.config();

import { main } from '../src/app';

const startServerless = async () => {
  const app = await main();

  return async (req: FastifyRequest, res: FastifyReply) => {
    await app.ready();
    app.server.emit('request', req, res);
  };
};

export default startServerless();
