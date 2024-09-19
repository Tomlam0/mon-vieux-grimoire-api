import { main } from './app';

const start = async () => {
  const app = await main();

  try {
    const port = app.config.PORT || 4000;
    const host = process.env.HOST || '0.0.0.0';

    await app.listen({ port, host });
  } catch (err) {
    app.log.error(err);

    process.exit(1);
  }
};

start();
