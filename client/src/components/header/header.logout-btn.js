import { useDispatch } from 'react-redux';
import { logout } from '../../services/store/modules/user/actions';
import Button from '../button';

export default function LogoutButton() {
  const dispatch = useDispatch();
  const isAuth = !!localStorage.token;

  const handleLogout = () => {
    dispatch(logout());
  };

  return <>{isAuth && <Button onClick={handleLogout}>Logout</Button>}</>;
}
