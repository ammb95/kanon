import { filterValidRoutes } from '../../services/router';
import routes from '../../services/router/routes';

export default function HeaderLinks() {
  const isAuth = !!localStorage.token;
  const removeDefaultRoute = route => route.path !== '/';

  return (
    <div className='header-links'>
      {routes
        .filter(filterValidRoutes(isAuth))
        .filter(removeDefaultRoute)
        .map(({ title, path }) => (
          <a key={path} href={path}>
            {title}
          </a>
        ))}
    </div>
  );
}
