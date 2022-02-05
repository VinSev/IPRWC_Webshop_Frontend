import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {IsLoggedInGuard} from "./authentication/guard/is-logged-in.guard";

const routes: Routes = [
  { path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  { path: 'products',
    component: ProductsComponent
  },
  // { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login',
    loadChildren: () => import("./authentication/authentication.module").then(m => m.AuthenticationModule),
    canActivate: [IsLoggedInGuard]
  },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
