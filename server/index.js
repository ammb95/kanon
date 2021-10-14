import express from 'express';
import * as environment from './environment';
import middlewares from './middlewares';

const server = express();

middlewares.forEach(m => server.use(m));

server.listen(environment.PORT, () =>
  console.log(`Server listening on port ${environment.PORT}`)
);
