import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {OrdersComponent} from "./orders.component";
import {OrderItemComponent} from "./order-list/order-item/order-item.component";
import {OrderListComponent} from "./order-list/order-list.component";



@NgModule({
  declarations: [
    OrdersComponent,
    OrderListComponent,
    OrderItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        pathMatch: "full",
        component: OrdersComponent
      }
    ])
  ]
})
export class OrdersModule { }
