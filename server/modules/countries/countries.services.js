export default class Services {
  constructor(repository, validators) {
    this.repository = repository;
    this.validators = validators;
  }
  async getAll() {
    return await this.repository.getAll();
  }
  async getByName(countryName) {
    const countries = await this.repository.getByName(countryName);
    this.validators.validateSingleCountry(countries);
    return { country: countries[0] };
  }

  async getManyByNames(countryNames) {
    return await this.repository.getManyByNames(countryNames);
  }
}
