import repository from './countries.repository';
import validators from './countries.validators';

class Services {
  async getAll() {
    return await repository.getAll();
  }
  async getByName(countryName) {
    const data = await repository.getByName(countryName);
    validators.validateSingleCountry(data);
    return data;
  }

  async getManyByNames(countryNames) {
    return await repository.getManyByNames(countryNames);
  }
}

const services = new Services();

export default services;
