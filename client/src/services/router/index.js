import { Switch, Route } from 'react-router-dom';
import useAuthRedirect from '../../hooks/useAuthRedirect';
import routes from './routes';

export const filterValidRoutes = isAuth => {
  return route =>
    route.isAuthIndependent ||
    (isAuth && route.isAuthProtected) ||
    (!isAuth && !route.isAuthProtected);
};

export default function Router() {
  useAuthRedirect();
  const isAuth = !!localStorage.token;

  return (
    <Switch>
      {routes.filter(filterValidRoutes(isAuth)).map(({ path, Page, props }) => (
        <Route key={path} path={path} {...props}>
          <Page />
        </Route>
      ))}
    </Switch>
  );
}
