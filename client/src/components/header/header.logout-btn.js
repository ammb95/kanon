import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { logout } from '../../services/store/modules/user/actions';
import Button from '../button';

export default function LogoutButton() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = !!localStorage.token;

  const handleLogout = () => {
    dispatch(logout());
    history.push('/login');
  };

  return <>{isAuth && <Button onClick={handleLogout}>Logout</Button>}</>;
}
