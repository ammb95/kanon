import { Router } from 'express';
import Validators from './auth.validators';
import Services from './auth.services';
import Controller from './auth.controller';

export const validators = new Validators();
export const services = new Services(validators);
export const controller = new Controller(services, validators);

const module = Router();

module.post('/login', controller.login.bind(controller));
module.get(
  '/rehydrate',
  validators.validateSession.bind(validators),
  controller.rehydrate.bind(controller)
);

export default module;
