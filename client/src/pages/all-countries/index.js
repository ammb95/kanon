import { useState, useEffect } from 'react';
import api from '../../services/api';
import LoadingWrapper from '../../components/loading-wrapper';
import CountriesList from '../../components/countries-list';
import SearchInput from './all-countries.search-input';
import './all-countries.styles.css';

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
      <SearchInput filter={filter} setFilter={setFilter} />
      <CountriesList countries={countries} filter={filter} />
    </LoadingWrapper>
  );
}
