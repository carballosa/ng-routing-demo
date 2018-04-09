import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UsersService {

  constructor() { }

  private users = [
    { id: 1, firstName: 'Jose', lastName: 'Carballosa'},
    { id: 2, firstName: 'Andrea', lastName: 'Correa'},
    { id: 3, firstName: 'Jose Andres', lastName: 'Carballosa'},
    { id: 4, firstName: 'Lucia', lastName: 'Carballosa'},
    { id: 5, firstName: 'Marie', lastName: 'Carballosa'},
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: number): User {
    return this.users.find(u => u.id === id);
  }
}
