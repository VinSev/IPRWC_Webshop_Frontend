import {Component, Input} from '@angular/core';
import {Order} from "../order.model";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {
  @Input()
  public orders: Order[] = [];

  constructor() { }

}
