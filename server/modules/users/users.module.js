import { Router } from 'express';
import Validators from './users.validators';
import Repository from './users.repository';
import Services from './users.services';
import Controller from './users.controller';
import { validators as authValidators } from '../auth/auth.module';
import SlotMachine from '../../services/slot-machine';

const slotMachine = new SlotMachine();
const validators = new Validators();
export const repository = new Repository(slotMachine);
export const services = new Services(repository);
export const controller = new Controller(services, validators);

const module = Router();

module.post('/users', controller.create.bind(controller));
module.post(
  '/users/:id/play',
  authValidators.validateSession.bind(authValidators),
  controller.play.bind(controller)
);

export default module;
