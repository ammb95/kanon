import { filterValidRoutes } from '../../services/router';
import routes from '../../services/router/routes';

export default function HeaderLinks() {
  const isAuth = !!localStorage.token;
  return (
    <div className='header-links'>
      {routes.filter(filterValidRoutes(isAuth)).map(({ title, path }) => (
        <a key={path} href={path}>
          {title}
        </a>
      ))}
    </div>
  );
}
