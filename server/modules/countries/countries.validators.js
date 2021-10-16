import MultipleMatchesException from '../../exceptions/multiple-matches';
import NoDataException from '../../exceptions/no-data';

export default class Validators {
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
