import Game from './slot-machine.game';
import UserInfo from './slot-machine.user-info';
import './styles.css';

export default function SlotMachine() {
  return (
    <>
      <h1>Slot Machine</h1>
      <div className='slot-machine-wrapper'>
        <UserInfo />
        <Game />
      </div>
    </>
  );
}
