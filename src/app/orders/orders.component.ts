import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrdersService} from "./orders.service";
import {Order} from "./order.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {
  public orders: Order[] = [];
  public subscription!: Subscription;

  constructor(private ordersService: OrdersService) { }

  public ngOnInit(): void {
    this.subscription = this.ordersService.getAll()
      .subscribe({
        next: response => {
          console.log(response)
          this.orders = response;
        }
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
