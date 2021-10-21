import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rehydrate } from '../services/store/modules/user/thunk';

export default function useRehydrate() {
  const dispatch = useDispatch();
  const userNotStored = !useSelector(({ user }) => user.id);
  const isAuth = !!localStorage.token;
  useEffect(() => {
    if (isAuth && userNotStored) {
      dispatch(rehydrate());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
