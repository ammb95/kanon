import {
  LOGIN_SUCCESS,
  LOGOUT,
  SET_LAST_RESULT,
  UPDATE_COINS,
} from './actionTypes';
import api from '../../../api';
import { v4 as uuid } from 'uuid';

const initialState = {
  token: '',
  id: '',
  name: '',
  email: '',
  coins: 0,
  last_result: null,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_SUCCESS: {
      const { user, token } = payload;
      localStorage.setItem('token', token);
      api.defaults.headers.Authorization = token;
      return {
        token: token,
        id: user.id,
        name: user.name,
        email: user.email,
        coins: user.coins,
      };
    }
    case UPDATE_COINS: {
      return {
        ...state,
        coins: payload.coins,
      };
    }
    case SET_LAST_RESULT: {
      return {
        ...state,
        last_result: { id: uuid(), ...payload },
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
