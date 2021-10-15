export default class Services {
  constructor(repository, validators) {
    this.repository = repository;
    this.validators = validators;
  }
  async getAll() {
    return await this.repository.getAll();
  }
  async getByName(countryName) {
    const data = await this.repository.getByName(countryName);
    this.validators.validateSingleCountry(data);
    return data;
  }

  async getManyByNames(countryNames) {
    return await this.repository.getManyByNames(countryNames);
  }
}
