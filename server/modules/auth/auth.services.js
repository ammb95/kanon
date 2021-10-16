import { sign } from 'jsonwebtoken';
import { JWT_KEY } from '../../services/environment';
import { repository as usersRepository } from '../users/users.module';

export default class Services {
  constructor(validators) {
    this.validators = validators;
  }

  getToken(user) {
    return `Bearer ${sign({ user }, JWT_KEY)}`;
  }

  async login(user) {
    await this.validators.validateUser(user);

    return {
      user: usersRepository.getByEmail(user.email),
      token: this.getToken(user),
    };
  }
}
