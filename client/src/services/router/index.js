import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ path, Page }) => (
          <Route key={path} path={path}>
            <Page />
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
}
