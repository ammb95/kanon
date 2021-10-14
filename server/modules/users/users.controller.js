import services from './users.services';
import validators from './users.validators';

class Controller {
  create(req, res, next) {
    try {
      validators.validateUserCreation(req.body);
      res.send(services.create(req.body));
    } catch (error) {
      next(error);
    }
  }
}

const controller = new Controller();

export default controller;
