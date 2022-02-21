import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrdersService} from "./orders.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {
  public subscription!: Subscription;

  constructor(public ordersService: OrdersService) { }

  public ngOnInit(): void {
    this.subscription = this.ordersService.getAll()
      .subscribe({
        next: response => {
          this.ordersService.orders = response;
        }
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
