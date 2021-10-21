import { loginSuccess, setLastResult, updateCoins } from './actions';

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
      if (error.message === 'Request failed with status code 404') {
        window.alert('User not found!');
      } else {
        window.alert(error.message);
      }
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

export function play() {
  return async function (dispatch, getState, { api }) {
    try {
      const {
        user: { id },
      } = getState();
      const {
        data: { coins, results, prize },
      } = await api.post(`/users/${id}/play`);

      dispatch(updateCoins(coins));
      //next line cleans state in order to avoid rendering error: Without it, the app renders more than 3 fruits
      dispatch(setLastResult(null));
      dispatch(setLastResult({ fruits: results, prize }));
    } catch (error) {
      console.log(error);
    }
  };
}
