import { Router } from 'express';
import controller from './countries.controller';

const module = Router();

module.get('/countries/all', controller.getAll);
module.get('/countries/by-name', controller.getByName);
module.get('/countries/many-by-names', controller.getManyByNames);

export default module;
