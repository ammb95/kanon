export default class NoDataException extends Error {
  constructor() {
    super();
    this.name = 'NoDataException';
    this.message = 'No countries found!';
    this.status = 404;
  }
}
