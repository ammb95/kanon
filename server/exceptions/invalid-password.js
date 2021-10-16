export default class InvalidPasswordException extends Error {
  constructor() {
    super();
    this.name = 'InvalidPasswordException';
    this.message = 'Password is invalid!';
    this.status = 500;
  }
}
