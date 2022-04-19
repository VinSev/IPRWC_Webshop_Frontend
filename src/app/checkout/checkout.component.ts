import { Component } from '@angular/core';
import {NotificationService} from "../notification/notification.service";
import {OrdersService} from "../orders/orders.service";
import {Subscription} from "rxjs";
import {ShoppingCartService} from "../shopping-cart/shopping-cart.service";
import {Product} from "../products/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  private subscription!: Subscription;

  constructor(private notificationService: NotificationService,
              private ordersService: OrdersService,
              private shoppingCartService: ShoppingCartService,
              private router: Router) { }

  public checkout(streetName: string, houseNumber: number, postcode: string, placeName: string): void {
    let products: Product[] = this.shoppingCartService.products;
    let dateLastUpdated: string = new Date().toISOString();
    this.subscription = this.ordersService.create({streetName, houseNumber, postcode, placeName, products, dateLastUpdated})
      .subscribe({
        complete: () => {
          this.notificationService.toastrSuccess("Order Completed");
          this.shoppingCartService.products = [];
          this.router.navigate(["shopping-cart"])
        },
        error: () => {
          this.notificationService.toastrWarning("Order could not be submitted");
        }
      });
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
