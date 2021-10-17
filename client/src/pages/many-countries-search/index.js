import { useEffect, useState } from 'react';
import api from '../../services/api';
import SearchInput from '../../components/search-input';
import Button from '../../components/button';
import SearchResult from './many-countries-search.search-result';

const MIN_INPUT_LENGTH = 4;

export default function ManyCountriesSearch() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const buttonIsDisabled = search.length < MIN_INPUT_LENGTH;
  const searchArr = search.split(' ');

  const restoreState = () => {
    setCountries([]);
    setIsLoading(false);
  };

  const getCountries = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get('/countries/many-by-names', {
        params: { countryNames: searchArr },
      });
      setCountries(data.countries);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      restoreState();
    }
  };

  useEffect(() => {
    if (search === '') {
      restoreState();
    }
  }, [search]);

  return (
    <>
      <h1>Many countries search</h1>
      <SearchInput
        placeholder={`Insert country names separated by space (min ${MIN_INPUT_LENGTH} characters)!`}
        onChange={({ target: { value } }) => setSearch(value)}
      />
      <Button disabled={buttonIsDisabled} onClick={() => getCountries()}>
        Search
      </Button>
      <SearchResult isLoading={isLoading} countries={countries} />
    </>
  );
}
