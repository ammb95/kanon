import { Field } from 'formik';
import TextInput from '../input';
import ErrorMessage from './form-field.error-message';
import './styles.css';

export default function FormField({
  label,
  name,
  placeholder,
  type = 'text',
  input = TextInput,
  errors,
  touched,
}) {
  const error = errors[name] && touched[name];
  return (
    <div className='field-wrapper'>
      <label>{label}</label>
      <Field
        name={name}
        id={name}
        key={name}
        type={type}
        as={input}
        placeholder={placeholder}
        className={error && 'field-error'}
      />
      <ErrorMessage error={error} message={errors[name]} />
    </div>
  );
}
