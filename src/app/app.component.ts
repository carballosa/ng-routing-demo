import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Router Demo</h1>
    <nav>
      <ul>
        <li><a [routerLink]="['/users']">Users</a></li>
        <li><a [routerLink]="['/products']">Products</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>`,
  styles: [`
    nav ul li {display:inline-block; padding: 4px;}
  `]
})
export class AppComponent {
  title = 'app';
}
