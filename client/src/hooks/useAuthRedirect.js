import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import routes from '../services/router/routes';

export default function useAuthRedirect() {
  const history = useHistory();
  const location = useLocation();

  const isAuth = !!localStorage.token;

  useEffect(() => {
    const isNotAuth = !isAuth;
    const currRoute = routes.find(r => r.path === location.pathname);
    const isNotPublicPath =
      currRoute.isAuthProtected && !currRoute.isAuthIndependent;

    if (isAuth && location.pathname === '/login') {
      history.push('/slot-machine');
    }
    if (isNotAuth && isNotPublicPath) {
      history.push('/login');
    }
  }, [isAuth, history, location]);
}
