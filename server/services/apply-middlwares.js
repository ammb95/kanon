import { postMiddlewares, preMiddlewares } from '../middlewares';
import modules from '../modules';

export default function applyMiddlewares(server) {
  preMiddlewares.forEach(middleware => server.use(middleware));
  modules.forEach(module => server.use(module));
  postMiddlewares.forEach(middleware => server.use(middleware));
}
