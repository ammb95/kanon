import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { rehydrate } from '../store/modules/user/thunk';

export default function useRehydrate() {
  const dispatch = useDispatch();
  const isAuth = !!localStorage.token;
  useEffect(() => {
    if (isAuth) {
      dispatch(rehydrate());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
