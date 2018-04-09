import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { HardwareComponent } from './hardware.component';
import { SoftwareComponent } from './software.component';

const routes: Routes = [
  {
    path: 'products', component: ProductsComponent,
    children: [
      {path: 'hardware', component: HardwareComponent},
      {path: 'software', component: SoftwareComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
