import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../authentication/guard/auth.guard";

const routes: Routes = [
  {
    path: 'checkout',
    loadChildren: () => import("../checkout/checkout.module").then(m => m.CheckoutModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
