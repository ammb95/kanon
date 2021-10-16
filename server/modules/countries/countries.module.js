import { Router } from 'express';
import Validators from './countries.validators';
import Repository from './countries.repository';
import Services from './countries.services';
import Controller from './countries.controller';

const validators = new Validators();
export const repository = new Repository();
export const services = new Services(repository, validators);
export const controller = new Controller(services);

const module = Router();

module.get('/countries/all', controller.getAll.bind(controller));
module.post('/countries/by-name', controller.getByName.bind(controller));
module.post(
  '/countries/many-by-names',
  controller.getManyByNames.bind(controller)
);

export default module;
