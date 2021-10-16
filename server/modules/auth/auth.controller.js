export default class Controller {
  constructor(services, validators) {
    this.services = services;
    this.validators = validators;
  }

  async login(req, res, next) {
    try {
      this.validators.validateLoginData(req.body);
      res.send(await this.services.login(req.body));
    } catch (error) {
      next(error);
    }
  }
}
