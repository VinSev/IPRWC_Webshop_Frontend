import { Component } from '@angular/core';
import {NotificationService} from "../notification/notification.service";
import {OrdersService} from "../orders/orders.service";
import {Subscription} from "rxjs";
import {ShoppingCartService} from "../shopping-cart/shopping-cart.service";
import {Order} from "../orders/order.model";
import {Product} from "../products/product.model";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  private subscription!: Subscription;

  constructor(private notificationService: NotificationService,
              private ordersService: OrdersService,
              private shoppingCartService: ShoppingCartService) { }

  public checkout(streetName: string, houseNumber: number, postcode: string, placeName: string): void {
    let products: Product[] = this.shoppingCartService.products;
    let order: Order = new Order(streetName, houseNumber, postcode, placeName, products, new Date().toISOString());
    this.subscription = this.ordersService.create(order)
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
