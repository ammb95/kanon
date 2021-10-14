import { Router } from 'express';
import services from './countries.services';

const controller = Router();

controller.get('/countries/all', async (_, res) => {
  try {
    res.send(await services.getAll());
  } catch (error) {
    next(error);
  }
});

controller.get('/countries/by-name', async (req, res, next) => {
  try {
    res.send(await services.getByName(req.body.countryName));
  } catch (error) {
    next(error);
  }
});

controller.get('/countries/many-by-names', async (req, res, next) => {
  try {
    res.send(await services.getManyByNames(req.body.countryNames));
  } catch (error) {
    next(error);
  }
});

export default controller;
