import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {WishlistComponent} from "./wishlist.component";



@NgModule({
  declarations: [
    WishlistComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        pathMatch: "full",
        component: WishlistComponent
      }
    ]),
  ]
})
export class WishlistModule { }
