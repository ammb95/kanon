import './all-countries.styles.css';

export default function SearchInput({ filter, setFilter }) {
  return (
    <input
      type='text'
      placeholder='Search by name'
      onChange={({ target: { value } }) => setFilter(value)}
      value={filter}
      className='all-countries-search-input'
    />
  );
}
