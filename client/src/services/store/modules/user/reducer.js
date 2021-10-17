import { LOGIN_SUCCESS, LOGOUT } from './actionTypes';
import api from '../../../api';

const initialState = {
  token: '',
  id: '',
  name: '',
  email: '',
  coins: 0,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_SUCCESS: {
      const {
        user: { id, name, email, coins },
        token,
      } = payload;

      localStorage.setItem('token', token);
      api.defaults.headers.Authorization = token;

      return {
        token,
        id,
        name,
        email,
        coins,
      };
    }
    case LOGOUT: {
      localStorage.clear();
      return initialState;
    }
    default:
      return state;
  }
}
