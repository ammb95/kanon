export default function Country({ country }) {
  return (
    <div className='country'>
      <img className='flag' src={country.flag} alt='flag'></img>
      {country.name}
    </div>
  );
}
