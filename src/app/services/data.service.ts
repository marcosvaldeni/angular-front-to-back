import { Injectable } from '@angular/core';

import { User } from '../models/User';

@Injectable()
export class DataService {
  users: User[];

  constructor() { 
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'doe@email.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'doe@email.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'doe@email.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
    ];
  }

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
