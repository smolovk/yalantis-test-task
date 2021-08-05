import User from '../types/user';

class InMemoryDb {
  static users: User[] = [];

  static saveUser(user: User) {
    this.users.push(user);
  }

  static getUserById(id: number) {
    let candidate: any;
    try {
      candidate = this.users.find((user) => user.id === id);

      return candidate;
    } catch (e) {
      candidate = undefined;
      return candidate;
    }
  }

  static findUserByName(name: string) {
    let candidate: any;
    try {
      candidate = this.users.find((user) => user.name === name);

      return candidate;
    } catch (e) {
      candidate = undefined;
      return candidate;
    }
  }
}

export default InMemoryDb;
