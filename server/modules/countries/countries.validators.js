import MultipleMatchesException from './exceptions/multiple-matches';
import NoDataException from './exceptions/no-data';

class Validators {
  validateNoData(data) {
    if (data.length === 0) {
      throw new NoDataException();
    }
  }
  validateSingleCountry(data) {
    this.validateNoData(data);
    if (data.length > 1) {
      throw new MultipleMatchesException();
    }
  }
}

const validators = new Validators();

export default validators;
