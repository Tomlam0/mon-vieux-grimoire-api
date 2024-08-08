import { FastifyInstance } from 'fastify';
import { loginRoute } from './login.route';
import { logoutRoute } from './logout.route';
import { signupRoute } from './signup.route';

export default async function userRoutes(app: FastifyInstance) {
  await loginRoute(app);
  await logoutRoute(app);
  await signupRoute(app);
}
