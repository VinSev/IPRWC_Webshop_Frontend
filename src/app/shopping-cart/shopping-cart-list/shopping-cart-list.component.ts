import {Component, Input} from '@angular/core';
import {Product} from "../../products/product.model";
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss']
})
export class ShoppingCartListComponent {
  @Input()
  public products!: Product[];

  constructor(public shoppingCartService: ShoppingCartService) { }

}
