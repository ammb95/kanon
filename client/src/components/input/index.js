import './styles.css';

export default function TextInput({ type = 'text', ...rest }) {
  return <input type={type} {...rest} />;
}
