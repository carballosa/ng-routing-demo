import { Component } from '@angular/core';

@Component({
  template: `
    <p>products works!</p>
    <nav>
      <li><a [routerLink]="['hardware']">Hardware</a></li>
      <li><a [routerLink]="['software']">Software</a></li>
    </nav>
    <router-outlet></router-outlet>`
})
export class ProductsComponent { }
