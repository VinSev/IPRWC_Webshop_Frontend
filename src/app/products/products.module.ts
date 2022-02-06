import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import {RouterModule} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductItemComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: "",
                pathMatch: "full",
                component: ProductsComponent
            }
        ]),
        FontAwesomeModule
    ]
})
export class ProductsModule { }
