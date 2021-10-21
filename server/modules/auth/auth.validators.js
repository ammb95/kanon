import { compareSync } from 'bcryptjs';
import { verify } from 'jsonwebtoken';
import schema from './auth.login-schema';
import InvalidPasswordException from '../../exceptions/invalid-password';
import UserNotFoundException from '../../exceptions/user-not-found';
import InvalidTokenException from '../../exceptions/invalid-token';
import NoTokenException from '../../exceptions/no-token';
import { JWT_KEY } from '../../services/environment';
import { repository as usersRepository } from '../users/users.module';

const joiOptions = {
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
};

export default class Validators {
  verifyToken(token) {
    try {
      return verify(token, JWT_KEY);
    } catch (error) {
      throw new InvalidTokenException();
    }
  }

  getTokenFromHeaders(headers) {
    return headers.authorization.split(' ')[1];
  }

  validateSession({ headers }, _, next) {
    try {
      this.validateToken(headers);
      next();
    } catch (error) {
      next(error);
    }
  }

  validateToken(headers) {
    if (headers.authorization) {
      this.verifyToken(this.getTokenFromHeaders(headers));
    } else {
      throw new NoTokenException();
    }
  }

  validateLoginData(data) {
    const { error } = schema.validate(data, joiOptions);
    if (error) {
      error.status = 422;
      throw error;
    }
  }

  async validatePassword(password, user) {
    const isInvalid = !compareSync(password, user.password);
    if (isInvalid) {
      throw new InvalidPasswordException();
    }
  }

  async validateUser({ email, password }) {
    const user = usersRepository.getByEmail(email);
    if (user) {
      await this.validatePassword(password, user);
    } else {
      throw new UserNotFoundException();
    }
  }
}
