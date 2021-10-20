export default function Fruit({ fruit }) {
  return <img className='fruit' src={fruit.src} alt={fruit.label} />;
}
