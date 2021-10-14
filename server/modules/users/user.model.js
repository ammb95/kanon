import { v4 as uuid } from 'uuid';

export default class User {
  constructor({ name, email, password }) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.password = password;
    this.coins = 0;
  }
}
