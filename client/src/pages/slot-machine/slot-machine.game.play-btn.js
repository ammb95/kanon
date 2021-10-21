import { useDispatch } from 'react-redux';
import Button from '../../components/button';
import { play } from '../../services/store/modules/user/thunk';

export default function PlayButton() {
  const dispatch = useDispatch();
  return <Button onClick={() => dispatch(play())}>Play</Button>;
}
