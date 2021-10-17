import { useEffect, useState } from 'react';
import api from '../../services/api';
import SearchResult from './single-country-search.search-result';
import TextInput from '../../components/input';
import Button from '../../components/button';

const MIN_INPUT_LENGTH = 4;

export default function SingleCountrySearch() {
  const [country, setCountry] = useState(null);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const buttonIsDisabled = search.length < MIN_INPUT_LENGTH;

  const restoreState = () => {
    setCountry(null);
    setIsLoading(false);
  };

  const getCountry = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get('/countries/by-name', {
        params: { countryName: search },
      });
      setCountry(data.country);
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
      <h1>Single country search</h1>
      <TextInput
        placeholder={`Insert country name (min ${MIN_INPUT_LENGTH} characters)!`}
        onChange={({ target: { value } }) => setSearch(value)}
      />
      <Button disabled={buttonIsDisabled} onClick={() => getCountry()}>
        Search
      </Button>
      <SearchResult isLoading={isLoading} country={country} />
    </>
  );
}
