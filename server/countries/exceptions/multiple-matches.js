export default class MultipleMatchesException extends Error {
  constructor() {
    super();
    this.name = 'MultipleMatchesException';
    this.message = 'Multiple countries found!';
    this.status = 500;
  }
}
