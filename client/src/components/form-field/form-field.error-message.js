export default function ErrorMessage({ error, message }) {
  return <>{error && <div className='field-error-message'>{message}</div>}</>;
}
