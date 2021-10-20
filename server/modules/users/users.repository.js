import User from './user.model';
import '../../util/array-methods';
import UserNotFoundException from '../../exceptions/user-not-found';
export default class Repository {
  constructor(slotMachine) {
    this.users = [];
    this.slotMachine = slotMachine;
  }

  create(draft) {
    const user = new User(draft);
    this.users.push(user);
    return { user };
  }

  getUserById(id) {
    return this.users.find(user => user.id === id);
  }

  getByEmail(email) {
    const user = this.users.find(user => user.email === email);
    return Object.assign({}, user);
  }

  modifyUser(id) {
    this.users = this.users.map(user =>
      user.id === id ? { ...user, coins: user.coins - 1 } : user
    );
  }

  updateUserInUsersArray(user) {
    this.users = this.users.replaceItem(u => u.id === user.id, user);
  }

  validateUser(user) {
    if (!user) throw new UserNotFoundException();
  }

  play(id) {
    const user = this.getUserById(id);
    this.validateUser(user);
    const gameResult = user.play(this.slotMachine);
    this.updateUserInUsersArray(user);
    return gameResult;
  }
}
