import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list.component';
import { UserDetailsComponent } from './user-details.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent,
    children: [
      { path: '', component: UsersListComponent },
      { path: ':id', component: UserDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
