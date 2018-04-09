import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './users.service';
import { User } from './user';

@Component({
  selector: 'app-user-details',
  template: `
  <p>users-details works!</p>
  <article>
    <div *ngIf="user">
      <h4> {{user.firstName}} ( {{user.id}} ) details</h4>
      <div>
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" value="{{user.firstName}}">
      </div>
      <div>
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" value="{{user.lastName}}">
      </div>
    </div>
  </article>
  `,
  styles: []
})
export class UserDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService) { }

  user: User;

  ngOnInit() {
    this.user = this.usersService.getUser(
                  +this.route.snapshot.paramMap.get('id'));
  }

}
