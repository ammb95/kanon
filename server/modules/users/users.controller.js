export default class Controller {
  constructor(services, validators) {
    this.services = services;
    this.validators = validators;
  }

  create(req, res, next) {
    try {
      this.validators.validateUserCreation(req.body);
      res.status(201).send(this.services.create(req.body));
    } catch (error) {
      next(error);
    }
  }

  play(req, res, next) {
    try {
      res.send(this.services.play(req.params.id));
    } catch (error) {
      next(error);
    }
  }
}
