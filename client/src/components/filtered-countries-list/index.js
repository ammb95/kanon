import CountriesList from '../countries-list';

export default function FilteredCountriesList({ countries, filter }) {
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );
  return <CountriesList countries={filteredCountries} />;
}
