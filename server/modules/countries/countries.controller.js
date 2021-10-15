export default class Controller {
  constructor(services) {
    this.services = services;
  }

  async getAll(_, res, next) {
    try {
      res.send(await this.services.getAll());
    } catch (error) {
      next(error);
    }
  }

  async getByName(req, res, next) {
    try {
      res.send(await this.services.getByName(req.body.countryName));
    } catch (error) {
      next(error);
    }
  }

  async getManyByNames(req, res, next) {
    try {
      res.send(await this.services.getManyByNames(req.body.countryNames));
    } catch (error) {
      next(error);
    }
  }
}
