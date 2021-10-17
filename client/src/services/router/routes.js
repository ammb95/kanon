import AllCountries from '../../pages/all-countries';
import Login from '../../pages/login';
import Registration from '../../pages/registration';
import SingleCountrySearch from '../../pages/single-country-search';
import ManyCountriesSearch from '../../pages/many-countries-search';

const routes = [
  {
    title: 'Login',
    path: '/login',
    Page: Login,
  },
  {
    title: 'Registration',
    path: '/registration',
    Page: Registration,
  },
  {
    title: 'All Countries',
    path: '/all-countries',
    Page: AllCountries,
  },
  {
    title: 'Single Country Search',
    path: '/single-country-search',
    Page: SingleCountrySearch,
  },
  {
    title: 'Many Countries Search',
    path: '/many-countries-search',
    Page: ManyCountriesSearch,
  },
];

export default routes;
