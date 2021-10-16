import { SET_COUNTRIES } from './actionTypes';

export const setCountries = countries => ({
  type: SET_COUNTRIES,
  payload: countries,
});
