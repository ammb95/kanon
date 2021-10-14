import repository from './users.repository';
import validators from './users.validators';

class Services {
  create(draft) {
    return repository.create(draft);
  }
}

const services = new Services();

export default services;
