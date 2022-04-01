import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import {RouterModule} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FormsModule} from "@angular/forms";
import { SearchPipe } from './search.pipe';
import {LazyLoadImageModule} from "ng-lazyload-image";
import { ProductEditComponent } from './product-edit/product-edit.component';
import {ProductEditItemComponent} from "./product-edit/product-edit-item/product-item.component";
import {IsAuthorizedGuard} from "../authentication/guard/is-authorized.guard";

@NgModule({
    declarations: [
        ProductsComponent,
        ProductListComponent,
        ProductItemComponent,
        SearchPipe,
        ProductEditComponent,
        ProductEditItemComponent
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
        RouterModule.forChild([
          {
            path: "edit",
            pathMatch: "full",
            component: ProductEditComponent,
            canActivate: [IsAuthorizedGuard]
          }
        ]),
        FontAwesomeModule,
        FormsModule,
        LazyLoadImageModule
    ]
})
export class ProductsModule { }
