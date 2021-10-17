import Loading from '../loading';

export default function LoadingWrapper({ isLoading, children }) {
  return <>{isLoading ? <Loading /> : children}</>;
}
