import { useState, useEffect } from 'react';
import api from '../../services/api';
import LoadingWrapper from '../../components/loading-wrapper';
import TextInput from '../../components/input';
import FilteredCountriesList from '../../components/filtered-countries-list';

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
    <>
      <h1>All countries</h1>
      <LoadingWrapper isLoading={isLoading}>
        <TextInput
          onChange={({ target: { value } }) => setFilter(value)}
          value={filter}
          placeholder='Search by name'
        />
        <FilteredCountriesList countries={countries} filter={filter} />
      </LoadingWrapper>
    </>
  );
}
