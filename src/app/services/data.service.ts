import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';

import { User } from '../models/User';

@Injectable()
export class DataService {
  users: User[];
  data: Observable<any>;

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

  getData() {
    this.data = new Observable(observable => {
      setTimeout(() => {
        observable.next(1);
      }, 1000);

      setTimeout(() => {
        observable.next(2);
      }, 2000);

      setTimeout(() => {
        observable.next(3);
      }, 3000);

      setTimeout(() => {
        observable.next(4);
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
