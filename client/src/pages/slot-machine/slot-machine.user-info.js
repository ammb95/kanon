import { useSelector } from 'react-redux';
import Coin from './coin';

export default function UserInfo() {
  const user = useSelector(({ user }) => user);
  return (
    <div className='user-info'>
      <h3>User info</h3>
      <p>
        <strong>Name</strong>: {user.name}
      </p>
      <p>
        <strong>E-mail</strong>: {user.email}
      </p>
      <h1 className='user-coins'>
        <Coin />
        {user.coins}
      </h1>
    </div>
  );
}
