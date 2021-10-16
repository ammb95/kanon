import Flag from './country.flag';
import './styles.css';

export default function Country({ country }) {
  return (
    <div className='country'>
      <Flag flag={country.flag} />
      {country.name}
    </div>
  );
}
