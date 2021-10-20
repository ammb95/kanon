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

  async login(userCredentials) {
    await this.validators.validateUser(userCredentials);
    const user = usersRepository.getByEmail(userCredentials.email);
    delete user.password;

    return {
      user,
      token: this.getToken(userCredentials),
    };
  }

  rehydrate(token) {
    const {
      user: { email },
    } = this.validators.verifyToken(token);
    const user = usersRepository.getByEmail(email);
    delete user.password;
    return { user };
  }
}
