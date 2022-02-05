import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IsLoggedInGuard} from "./authentication/guard/is-logged-in.guard";

const routes: Routes = [
  { path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  { path: 'products',
    loadChildren: () => import("./products/products.module").then(m => m.ProductsModule)
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
