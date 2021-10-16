import express from 'express';
import applyMiddlewares from './services/apply-middlwares';
import * as environment from './services/environment';

const server = express();

applyMiddlewares(server);

server.listen(environment.PORT, () =>
  console.log(`Server listening on port ${environment.PORT}`)
);
