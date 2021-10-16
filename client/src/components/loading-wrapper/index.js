export default function LoadingWrapper({ isLoading, children }) {
  return <>{isLoading ? <h1>Loading</h1> : children}</>;
}
