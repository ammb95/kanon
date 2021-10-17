import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';

export default function useAuthRedirect() {
  const history = useHistory();
  const location = useLocation();

  const isAuth = !!localStorage.token;

  useEffect(() => {
    const isNotAuth = !isAuth;
    const isNotPublicPath = !(
      location.pathname === '/login' || location.pathname === '/registration'
    );
    if (isAuth && location.pathname === '/login') {
      history.push('/all-countries');
    }
    if (isNotAuth && isNotPublicPath) {
      history.push('/login');
    }
  }, [isAuth, history, location]);
}
