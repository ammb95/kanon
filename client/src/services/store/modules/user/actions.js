import {
  LOGIN_SUCCESS,
  LOGOUT,
  SET_LAST_RESULT,
  UPDATE_COINS,
} from './actionTypes';

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});

export const updateCoins = coins => ({
  type: UPDATE_COINS,
  payload: { coins },
});

export const setLastResult = newResult => ({
  type: SET_LAST_RESULT,
  payload: newResult,
});
