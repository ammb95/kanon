import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import api from '../../services/api';
import FormField from '../../components/form-field';
import Button from '../../components/button';
import schema from './registration.schema';

export default function RegistrationForm() {
  const history = useHistory();
  const initialValues = {};
  const formId = 'registration-form';

  const userWasCreated = user => {
    if (user) {
      window.alert('User created successfully');
      return true;
    }
    window.alert('An error occurred, try again!');
    return false;
  };

  const handleSubmit = async userData => {
    try {
      const {
        data: { user },
      } = await api.post('/register', userData);
      if (userWasCreated(user)) {
        history.push('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
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
              name='name'
              label='Name'
              placeholder='Your name'
              errors={errors}
              touched={touched}
            />
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
            <Button type='submit'>Submit</Button>
          </Form>
        );
      }}
    </Formik>
  );
}
