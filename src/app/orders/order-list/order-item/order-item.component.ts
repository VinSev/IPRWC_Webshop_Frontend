import {Component, Input} from '@angular/core';
import {Order} from "../../order.model";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {faTrashAlt} from "@fortawesome/free-regular-svg-icons";
import {OrdersService} from "../../orders.service";

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent {
  public faTrashAlt: IconDefinition = faTrashAlt;

  @Input()
  public order!: Order;

  constructor(private ordersService: OrdersService) { }

  public remove(): void {

  }

  public getTotalPrice(): number {
    let totalPrice: number = 0;
    for(let product of this.order.products) {
      totalPrice += product.price * product.amount;
    }
    return totalPrice;
  }
}
