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
    isAuthProtected: false,
    isAuthIndependent: false,
  },
  {
    title: 'Registration',
    path: '/registration',
    Page: Registration,
    isAuthProtected: false,
    isAuthIndependent: false,
  },
  {
    title: 'All Countries',
    path: '/all-countries',
    Page: AllCountries,
    isAuthProtected: false,
    isAuthIndependent: true,
  },
  {
    title: 'Single Country Search',
    path: '/single-country-search',
    Page: SingleCountrySearch,
    isAuthProtected: false,
    isAuthIndependent: true,
  },
  {
    title: 'Many Countries Search',
    path: '/many-countries-search',
    Page: ManyCountriesSearch,
    isAuthProtected: false,
    isAuthIndependent: true,
  },
];

export default routes;
