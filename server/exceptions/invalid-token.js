export default class InvalidTokenException extends Error {
  constructor() {
    super();
    this.name = 'InvalidTokenException';
    this.message = 'Token is invalid!';
    this.status = 403;
  }
}
