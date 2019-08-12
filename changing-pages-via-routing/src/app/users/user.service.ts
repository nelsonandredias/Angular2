import { UserModel } from './user.model';

export class UserService {

  users: UserModel[] = [
    new UserModel(1, 'Nelson'),
    new UserModel(2, 'Andre'),
    new UserModel(3, 'Romero'),
    new UserModel(4, 'Joana'),
    new UserModel(5, 'Ana')
  ];

  getUsers() {
    return this.users.slice();
  }

}
