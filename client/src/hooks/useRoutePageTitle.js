import { useEffect } from 'react';
import { useLocation } from 'react-router';
import routes from '../services/router/routes';

export default function useRoutePageTitle() {
  const location = useLocation();
  useEffect(() => {
    const currRoute = routes.find(route => route.path === location.pathname);
    document.title = currRoute.title;
  }, [location]);
}
