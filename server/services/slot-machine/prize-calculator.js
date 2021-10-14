import PRIZE_CONFIGS from './prizes-configs';

class PrizeCalculator {
  constructor() {
    this.configs = PRIZE_CONFIGS;
  }
  calculate(fruit, resultLength) {
    const prizeConfig = this.configs.find(prize => prize.fruit === fruit);
    return resultLength === 2 ? prizeConfig.small_prize : prizeConfig.big_prize;
  }
}

const prizeCalculator = new PrizeCalculator();

export default prizeCalculator;
