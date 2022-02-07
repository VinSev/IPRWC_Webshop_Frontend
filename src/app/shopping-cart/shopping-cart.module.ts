import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import {RouterModule} from "@angular/router";
import { ShoppingCartListComponent } from './shopping-cart-list/shopping-cart-list.component';
import { ShoppingCartItemComponent } from './shopping-cart-list/shopping-cart-item/shopping-cart-item.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [
    ShoppingCartComponent,
    ShoppingCartListComponent,
    ShoppingCartItemComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: "",
                pathMatch: "full",
                component: ShoppingCartComponent
            }
        ]),
        FontAwesomeModule,
    ]
})
export class ShoppingCartModule { }
