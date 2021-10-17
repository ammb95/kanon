import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import FormField from '../../components/form-field';
import Button from '../../components/button';
import schema from './login.schema';
import { loginRequest } from '../../services/store/modules/user/thunk';

export default function LoginForm() {
  const dispatch = useDispatch();

  const initialValues = {};
  const formId = 'login-form';

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={credentials => dispatch(loginRequest(credentials))}
      validationSchema={schema}
    >
      {({ handleSubmit, errors, touched }) => {
        return (
          <Form
            id={formId}
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <FormField
              name='email'
              label='E-mail'
              placeholder='email@example.com'
              errors={errors}
              touched={touched}
            />
            <FormField
              name='password'
              label='Password'
              placeholder='********'
              type='password'
              errors={errors}
              touched={touched}
            />
            <Button type='submit'>Login</Button>
          </Form>
        );
      }}
    </Formik>
  );
}
