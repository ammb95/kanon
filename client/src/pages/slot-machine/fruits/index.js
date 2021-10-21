import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Fruit from './fruit';
import fruitsSchemas from './fruits.schemas';

export default function Fruits() {
  const lastResult = useSelector(({ user }) => user.last_result);
  const fruits = useMemo(
    () =>
      lastResult?.fruits?.map(fruit =>
        fruitsSchemas.find(schema => schema.label === fruit)
      ),
    [lastResult]
  );
  return (
    <div className='fruits'>
      {fruits?.map(fruit => (
        <Fruit key={`${fruit.label}-${lastResult?.id}`} fruit={fruit} />
      ))}
    </div>
  );
}
