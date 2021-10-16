import Country from '../../components/country';
import LoadingWrapper from '../../components/loading-wrapper';

export default function SearchResult({ isLoading, country }) {
  return (
    <LoadingWrapper isLoading={isLoading}>
      {country ? (
        <Country country={country} />
      ) : (
        <h3>Please type a country name to start search</h3>
      )}
    </LoadingWrapper>
  );
}
