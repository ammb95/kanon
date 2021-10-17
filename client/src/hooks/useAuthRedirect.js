import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import routes from '../services/router/routes';

export default function useAuthRedirect() {
  const history = useHistory();
  const location = useLocation();

  const isAuth = !!localStorage.token;

  useEffect(() => {
    const isNotAuth = !isAuth;
    const route = routes.find(r => r.path === location.pathname);
    const isNotPublicPath = route.isAuthProtected && !route.isAuthIndependent;

    if (isAuth && location.pathname === '/login') {
      history.push('/all-countries');
    }
    if (isNotAuth && isNotPublicPath) {
      history.push('/login');
    }
  }, [isAuth, history, location]);
}
