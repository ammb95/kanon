import User from './user.model';

class Repository {
  constructor() {
    this.users = [];
  }
  create(draft) {
    const user = new User(draft);
    this.users.push(user);
    return user;
  }
}
const repository = new Repository();

export default repository;
