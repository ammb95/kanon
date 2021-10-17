import HeaderLinks from './header.links';
import LogoutButton from './header.logout-btn';
import './styles.css';

export default function Header() {
  return (
    <header>
      <h1>Kanon Test</h1>
      <HeaderLinks />
      <LogoutButton />
    </header>
  );
}
