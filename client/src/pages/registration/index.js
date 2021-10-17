import RegistrationForm from './registration.form';
import './styles.css';

export default function Registration() {
  return (
    <div className='registration-wrapper'>
      <h1>Registration</h1>

      <RegistrationForm />

      <div className='create-account-link'>
        If you have an account you can <a href='/login'>Login</a>
      </div>
    </div>
  );
}
