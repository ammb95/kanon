export default class NoCoinsException extends Error {
  constructor() {
    super();
    this.name = 'NoCoinsException';
    this.message = 'User has no coins';
    this.status = 500;
  }
}
