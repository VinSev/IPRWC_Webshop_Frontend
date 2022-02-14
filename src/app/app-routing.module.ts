import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IsLoggedInGuard} from "./authentication/guard/is-logged-in.guard";
import {AuthGuard} from "./authentication/guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () => import("./products/products.module").then(m => m.ProductsModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import("./shopping-cart/shopping-cart.module").then(m => m.ShoppingCartModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import("./wishlist/wishlist.module").then(m => m.WishlistModule)
  },
  {
    path: 'login',
    loadChildren: () => import("./authentication/authentication.module").then(m => m.AuthenticationModule),
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'orders',
    loadChildren: () => import("./orders/orders.module").then(m => m.OrdersModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  },
  {
    path: '404',
    loadChildren: () => import("./error/error.module").then(m => m.ErrorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
