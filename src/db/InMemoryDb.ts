import User from '../types/user';

class InMemoryDb {
  static users: User[] = [];

  /**
   * Save user to users array
   * @param user
   */
  static saveUser(user: User) {
    this.users.push(user);
  }

  /**
   * Find in users array user with id
   * @param id
   * @returns
   */
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
}

export default InMemoryDb;
