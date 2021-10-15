export default class UserNotFoundException extends Error {
  constructor() {
    super();
    this.name = 'UserNotFoundException';
    this.message = 'User not found!';
    this.status = 404;
  }
}
