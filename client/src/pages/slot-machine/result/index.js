import { useSelector } from 'react-redux';
import Fruits from '../fruits';
import EmptyResult from './empty-result';
import Prize from './result.prize';

export default function Result() {
  const lastResult = useSelector(({ user }) => user.last_result);
  return (
    <>
      {lastResult ? (
        <div className='result'>
          <h3>Last Result</h3>
          <Fruits />
          <Prize />
        </div>
      ) : (
        <EmptyResult />
      )}
    </>
  );
}
