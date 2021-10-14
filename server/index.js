import express from 'express';
import * as environment from './environment';
import { preMiddlewares, postMiddlewares } from './middlewares';
import modules from './modules';

const server = express();

preMiddlewares.forEach(middleware => server.use(middleware));
modules.forEach(module => server.use(module));
postMiddlewares.forEach(middleware => server.use(middleware));

server.listen(environment.PORT, () =>
  console.log(`Server listening on port ${environment.PORT}`)
);
