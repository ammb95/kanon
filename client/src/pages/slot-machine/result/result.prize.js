import { useSelector } from 'react-redux';
import Coin from '../coin';

export default function Prize() {
  const lastResult = useSelector(({ user }) => user.last_result);
  return (
    <p className='prize'>
      Prize: {lastResult?.prize}
      <Coin />
    </p>
  );
}
