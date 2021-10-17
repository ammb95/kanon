import './styles.css';
import LoginForm from './login.form';

export default function Login() {
  return (
    <div className='login-wrapper'>
      <h1>Login</h1>

      <LoginForm />
      <div className='create-account-link'>
        If you don't have an account you can{' '}
        <a href='/registration'>Register</a>
      </div>
    </div>
  );
}
