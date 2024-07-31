import { main } from './app';

const start = async () => {
  const app = await main();

  try {
    const port = app.config.PORT || 4000;

    await app.listen({ port });
  } catch (err) {
    app.log.error(err);

    process.exit(1);
  }
};

start();
