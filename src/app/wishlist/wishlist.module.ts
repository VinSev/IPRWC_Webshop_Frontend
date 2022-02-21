import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {WishlistComponent} from "./wishlist.component";
import { WishlistListComponent } from './wishlist-list/wishlist-list.component';
import { WishlistItemComponent } from './wishlist-list/wishlist-item/wishlist-item.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {LazyLoadImageModule} from "ng-lazyload-image";



@NgModule({
  declarations: [
    WishlistComponent,
    WishlistListComponent,
    WishlistItemComponent
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
        FontAwesomeModule,
        LazyLoadImageModule,
    ]
})
export class WishlistModule { }
