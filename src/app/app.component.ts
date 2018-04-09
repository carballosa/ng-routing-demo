import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1>Welcome to {{ title }}!</h1>
    </div>
    <nav>
      <li><a [routerLink]="['/users']">Users</a></li>
      <li><a [routerLink]="['/products']">Products</a></li>
    </nav>
    <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'app';
}
