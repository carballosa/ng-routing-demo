import { Component } from '@angular/core';

@Component({
  template: `
    <p>products works!</p>
    <nav>
      <ul>
        <li><a [routerLink]="['hardware']">Hardware</a></li>
        <li><a [routerLink]="['software']">Software</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>`,
    styles: [`
      nav ul li {display:inline-block; padding: 4px;}
    `]})
export class ProductsComponent { }
