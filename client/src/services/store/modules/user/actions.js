import { LOGIN_SUCCESS, LOGOUT } from './actionTypes';

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});
