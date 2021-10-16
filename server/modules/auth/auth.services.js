import { sign } from 'jsonwebtoken';
import { JWT_KEY } from '../../services/environment';

export default class Services {
  constructor(validators) {
    this.validators = validators;
  }

  getToken(user) {
    return `Bearer ${sign({ user }, JWT_KEY)}`;
  }

  async login(user) {
    await this.validators.validateUser(user);
    return { token: this.getToken(user) };
  }

  logout({ token }) {}
}
