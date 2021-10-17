import AllCountries from '../../pages/all-countries';
import SingleCountrySearch from '../../pages/single-country-search';

const routes = [
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
    Page: SingleCountrySearch,
  },
];

export default routes;
