import routes from '../../services/router/routes';
import './styles.css';
export default function Header() {
  return (
    <header>
      <h1>Kanon Test</h1>
      {routes.map(({ title, path }) => (
        <a key={path} href={path}>
          {title}
        </a>
      ))}
    </header>
  );
}
