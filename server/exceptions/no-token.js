export default class NoTokenException extends Error {
  constructor() {
    super();
    this.name = 'NoTokenException';
    this.message = 'Token was not provided!';
    this.status = 403;
  }
}
