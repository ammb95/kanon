import { Router } from 'express';
import controller from './users.controller';

const module = Router();

module.post('/users', controller.create);

export default module;
