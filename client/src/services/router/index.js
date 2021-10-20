import { Switch, Route } from 'react-router-dom';
import useAuthRedirect from '../../hooks/useAuthRedirect';
import useRehydrate from '../../hooks/useRehydrate';
import useRoutePageTitle from '../../hooks/useRoutePageTitle';
import routes from './routes';

export const filterValidRoutes = isAuth => {
  return route =>
    route.isAuthIndependent ||
    (isAuth && route.isAuthProtected) ||
    (!isAuth && !route.isAuthProtected);
};

export default function Router() {
  useAuthRedirect();
  useRoutePageTitle();
  useRehydrate();
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
