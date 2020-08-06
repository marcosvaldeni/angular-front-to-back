import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;


  constructor() { }

  ngOnInit(): void {
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

    this.loaded = true;
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();

    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      email: '',
    }
  }

  fireEvent(e) {
    console.log(e.type);

  }

  onSubmit(e) {
    console.log(123);

    e.preventDefault();
  }
}
