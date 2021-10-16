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

  async rehydrate(req, res, next) {
    try {
      res.send(
        await this.services.rehydrate(
          this.validators.getTokenFromHeaders(req.headers)
        )
      );
    } catch (error) {
      next(error);
    }
  }
}
