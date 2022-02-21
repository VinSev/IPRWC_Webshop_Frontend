import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import {RouterModule} from "@angular/router";
import { ShoppingCartListComponent } from './shopping-cart-list/shopping-cart-list.component';
import { ShoppingCartItemComponent } from './shopping-cart-list/shopping-cart-item/shopping-cart-item.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ShoppingCartRoutingModule} from "./shopping-cart-routing.module";
import {LazyLoadImageModule} from "ng-lazyload-image";



@NgModule({
  declarations: [
    ShoppingCartComponent,
    ShoppingCartListComponent,
    ShoppingCartItemComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    RouterModule.forChild([
      {
        path: "",
        pathMatch: "full",
        component: ShoppingCartComponent
      }
    ]),
    FontAwesomeModule,
    LazyLoadImageModule
  ]
})
export class ShoppingCartModule { }
