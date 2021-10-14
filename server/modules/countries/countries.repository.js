import axios from 'axios';
import '../../../util/array-methods';

const BASE_URL = 'https://restcountries.com/v3.1';
const GET_ALL_URL = `${BASE_URL}/all`;
const getByNameURL = countryName => `${BASE_URL}/name/${countryName}`;

class Repository {
  async getAll() {
    const { data } = await axios.get(GET_ALL_URL);
    return data;
  }

  async getByName(countryName) {
    const { data } = await axios.get(getByNameURL(countryName));
    return data;
  }

  async getManyByNames(countryNames) {
    const results = await Promise.all(
      countryNames.map(async countryName => await this.getByName(countryName))
    );
    return [].concat(...results).removeDuplicates(c => c.name.common);
  }
}

const repository = new Repository();

export default repository;
