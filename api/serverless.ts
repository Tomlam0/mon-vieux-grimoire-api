import { FastifyRequest, FastifyReply } from 'fastify';
import * as dotenv from 'dotenv';

import { main } from '../src/app';

dotenv.config();

const startServerless = async () => {
  const app = await main();

  return async (req: FastifyRequest, res: FastifyReply) => {
    await app.ready();
    app.server.emit('request', req, res);
  };
};

export default startServerless();
