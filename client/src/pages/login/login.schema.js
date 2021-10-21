import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().required('Insert your email.'),
  password: Yup.string().required('Insert your password.'),
});

export default schema;
