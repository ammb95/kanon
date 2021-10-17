import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { filterValidRoutes } from '../../services/router';
import routes from '../../services/router/routes';
import { logout } from '../../services/store/modules/user/actions';
import Button from '../button';
import './styles.css';
export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();

  const isAuth = !!localStorage.token;

  const handleLogout = () => {
    dispatch(logout());
    history.push('/login');
  };

  return (
    <header>
      <h1>Kanon Test</h1>
      {routes.filter(filterValidRoutes(isAuth)).map(({ title, path }) => (
        <a key={path} href={path}>
          {title}
        </a>
      ))}
      <Button onClick={handleLogout}>Logout</Button>
    </header>
  );
}
