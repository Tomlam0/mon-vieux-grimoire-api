import { FastifyInstance } from 'fastify';

import { createBookRoute } from './createBook.route';
import { deleteBookRoute } from './deleteBook.route';
import { getAllBooksRoute } from './getAllBooks.route';
import { getBestBooksRoute } from './getBestBooks.route';
import { getOneBookRoute } from './getOneBook.route';
import { rateBookRoute } from './rateBook.route';
import { updateBookRoute } from './updateBook.route';

export default async function bookRoutes(app: FastifyInstance) {
  await createBookRoute(app);
  await deleteBookRoute(app);
  await getAllBooksRoute(app);
  await getBestBooksRoute(app);
  await getOneBookRoute(app);
  await rateBookRoute(app);
  await updateBookRoute(app);
}
