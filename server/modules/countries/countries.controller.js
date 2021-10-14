import services from '../countries/countries.services';

class Controller {
  async getAll(_, res) {
    try {
      res.send(await services.getAll());
    } catch (error) {
      next(error);
    }
  }

  async getByName(req, res, next) {
    try {
      res.send(await services.getByName(req.body.countryName));
    } catch (error) {
      next(error);
    }
  }

  async getManyByNames(req, res, next) {
    try {
      res.send(await services.getManyByNames(req.body.countryNames));
    } catch (error) {
      next(error);
    }
  }
}

const controller = new Controller();

export default controller;
