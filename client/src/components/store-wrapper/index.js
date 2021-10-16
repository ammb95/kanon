import { Provider } from 'react-redux';
import store from '../../services/store';

export default function StoreWrapper({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
