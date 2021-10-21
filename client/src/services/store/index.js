import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import api from '../api';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ api }))
);

export default store;
