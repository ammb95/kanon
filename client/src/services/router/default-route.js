import { Redirect } from 'react-router-dom';
export default function DefaultRoute() {
  const isAuth = !!localStorage.token;
  const redirectPath = isAuth ? '/all-countries' : '/login';
  return <Redirect to={redirectPath} />;
}
