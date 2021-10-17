import { loginSuccess } from './actions';

export function loginRequest(credentials) {
  return async function (dispatch, _, { api }) {
    try {
      const {
        data: { token, user },
      } = await api.post('/login', credentials);

      if (token && user) {
        dispatch(loginSuccess({ user, token }));
      }
    } catch (error) {
      window.alert(error.message);
    }
  };
}

export function rehydrate() {
  return async function (dispatch, _, { api }) {
    try {
      const { token } = localStorage;
      api.defaults.headers.Authorization = token;

      const {
        data: { user },
      } = await api.get('/rehydrate');

      dispatch(loginSuccess({ user, token }));
    } catch (error) {
      console.log(error);
    }
  };
}
