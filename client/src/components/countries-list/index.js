import Country from '../country';

export default function CountriesList({ countries, filter }) {
  return (
    <>
      {countries
        .filter(country =>
          country.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(country => (
          <Country key={country.area} country={country} />
        ))}
    </>
  );
}
