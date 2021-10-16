import { APPLE, BANANA, CHERRY, LEMON } from './slot-machine.constants';

const PRIZE_CONFIGS = [
  {
    fruit: CHERRY,
    big_prize: 50,
    small_prize: 40,
  },
  {
    fruit: APPLE,
    big_prize: 20,
    small_prize: 10,
  },
  {
    fruit: BANANA,
    big_prize: 15,
    small_prize: 5,
  },
  {
    fruit: LEMON,
    big_prize: 3,
    small_prize: 0,
  },
];

export default PRIZE_CONFIGS;
