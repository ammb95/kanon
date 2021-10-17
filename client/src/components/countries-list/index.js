import Country from '../country';

export default function CountriesList({ countries }) {
  return (
    <>
      {countries.map(country => (
        <Country key={country.area} country={country} />
      ))}
    </>
  );
}
