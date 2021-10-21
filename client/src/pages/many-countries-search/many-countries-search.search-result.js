import CountriesList from '../../components/countries-list';
import LoadingWrapper from '../../components/loading-wrapper';

export default function SearchResult({ isLoading, countries }) {
  return (
    <LoadingWrapper isLoading={isLoading}>
      {countries.length ? (
        <CountriesList countries={countries} />
      ) : (
        <h3>
          Please type at least one country name (or partial name) to start
          search
        </h3>
      )}
    </LoadingWrapper>
  );
}
