import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users-list',
  template: `
    <p>users-list works!</p>
    <article>
      <h4>My Users</h4>
      <ul>
        <li *ngFor="let user of users">
          <a href="" [routerLink]="[user.id]">
          {{user.firstName}} {{user.lastName}}
          </a>
        </li>
      </ul>
    </article>`,
  styles: []
})
export class UsersListComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  users: User[];

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

}
