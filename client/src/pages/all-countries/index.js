import { useState, useEffect } from 'react';
import api from '../../services/api';
import LoadingWrapper from '../../components/loading-wrapper';
import SearchInput from '../../components/search-input';
import CountriesList from '../../components/countries-list';

export default function AllCountries() {
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get('/countries/all');
      setCountries(data.countries);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <LoadingWrapper isLoading={isLoading}>
      <h1>All countries</h1>
      <SearchInput
        onChange={({ target: { value } }) => setFilter(value)}
        value={filter}
        placeholder='Search by name'
      />
      <CountriesList countries={countries} filter={filter} />
    </LoadingWrapper>
  );
}
