import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
