import { setCountries } from './actions';

export function getAllCountries() {
  return async function (dispatch, _, { api }) {
    try {
      const {
        data: { countries },
      } = await api.get('/countries/all');
      dispatch(setCountries(countries));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCountryByName(countryName) {
  return async function (dispatch, _, { api }) {
    try {
      const {
        data: { country },
      } = await api.post('/countries/by-name', { countryName });
      dispatch(setCountries(country));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getManyCountriesByNames(countryNames) {
  return async function (dispatch, _, { api }) {
    try {
      const {
        data: { countries },
      } = await api.post('/countries/many-by-names', { countryNames });
      dispatch(setCountries(countries));
    } catch (error) {
      console.log(error);
    }
  };
}
