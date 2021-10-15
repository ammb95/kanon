import { v4 as uuid } from 'uuid';
import { hashSync } from 'bcryptjs';
import NoCoinsException from '../../exceptions/no-coins';

export default class User {
  constructor({ name, email, password }) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.password = hashSync(password);
    this.coins = 20;
  }

  validateCoins() {
    if (this.coins === 0) {
      throw new NoCoinsException();
    }
  }

  consumeCoin() {
    this.validateCoins();
    this.coins = this.coins - 1;
  }

  addPrizeToCoins(prize) {
    this.coins = this.coins + prize;
  }

  play(slotMachine) {
    this.consumeCoin();
    const { prize, results } = slotMachine.play();
    this.addPrizeToCoins(prize);

    return { coins: this.coins, prize, results };
  }
}
