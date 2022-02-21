import {Component, Input} from '@angular/core';
import {Order} from "../../order.model";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {faTrashAlt} from "@fortawesome/free-regular-svg-icons";
import {OrdersService} from "../../orders.service";
import {NotificationService} from "../../../notification/notification.service";

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent {
  public faTrashAlt: IconDefinition = faTrashAlt;

  @Input()
  public order!: Order;

  constructor(private ordersService: OrdersService,
              private notificationService: NotificationService) { }

  public getTotalPrice(): number {
    let totalPrice: number = 0;
    for(let product of this.order.products) {
      totalPrice += product.price * product.amount;
    }
    return totalPrice;
  }

  public remove(): void {
    this.notificationService.confirmationDelete("Are you sure you want to delete this order?", "Delete Order")
      .then(result => {
        if(result.value) {
          this.confirmedRemoval();
        }
      });
  }

  private confirmedRemoval(): void {
    this.ordersService.delete(this.order)
      .subscribe({
        complete: () => {
          let index: number = this.ordersService.orders.indexOf(this.order);
          this.ordersService.orders.splice(index, 1);
          this.notificationService.toastrInfo("Order removed");
        },
        error: () => {
          this.notificationService.toastrInfo("Something went wrong");
        }
      });
  }
}
