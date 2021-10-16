import './styles.css';

export default function SearchInput({ ...rest }) {
  return <input type='text' className='search-input' {...rest} />;
}
