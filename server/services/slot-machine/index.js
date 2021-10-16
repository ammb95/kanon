import { NO_PRIZE, NUM_OF_SLOTS } from './slot-machine.constants';
import '../../../util/array-methods';
import prizeCalculator from './prize-calculator';
import reels from './slot-machine.reels';

export default class SlotMachine {
  constructor() {
    this.reels = reels;
  }

  isOdd(number) {
    return number % 2 !== 0;
  }

  getRandomIndex() {
    return Math.round((NUM_OF_SLOTS - 1) * Math.random());
  }

  getRandomIndexes() {
    return new Array(3).fill(null).map(() => this.getRandomIndex());
  }

  getRespectiveFruit(indexes) {
    return indexes.map((chosenIndex, i) => this.reels[i][chosenIndex]);
  }

  getResultsData(fruits) {
    return fruits.map((fruit, index) => ({
      fruit,
      count: fruits.count(f => f === fruit),
      index,
    }));
  }

  filterRepeatedResults(results) {
    return results.filter(r => r.count > 1);
  }

  getResults() {
    return this.getResultsData(
      this.getRespectiveFruit(this.getRandomIndexes())
    );
  }

  getSumOfIndexes(results) {
    return this.filterRepeatedResults(results).sum(r => r.index);
  }

  resultsAreValid(results) {
    // Considering that the valid results are two or three fruits in a row,
    // the valid sets of indexes would be only [0, 1], [1, 2] and [0, 1, 2].
    // Thus, the result will be valid only when the sum of indexes
    // of the reels that yielded the same fruits is an odd number (1 or 3).
    return (
      this.filterRepeatedResults(results).length > 0 &&
      this.isOdd(this.getSumOfIndexes(results))
    );
  }

  calculatePrize(results) {
    const repeatedResults = this.filterRepeatedResults(results);
    return this.resultsAreValid(results)
      ? prizeCalculator.calculate(
          repeatedResults[0].fruit,
          repeatedResults.length
        )
      : NO_PRIZE;
  }

  play() {
    const results = this.getResults();
    return {
      results: results.map(r => r.fruit),
      prize: this.calculatePrize(results),
    };
  }
}
