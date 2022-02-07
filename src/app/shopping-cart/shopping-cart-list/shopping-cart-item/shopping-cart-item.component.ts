import {Component, Input} from '@angular/core';
import {Product} from "../../../products/product.model";
import {faMinus, faPlus, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {faTrashAlt, faHeart} from "@fortawesome/free-regular-svg-icons";
import {ShoppingCartService} from "../../shopping-cart.service";

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent {
  public faMinus: IconDefinition = faMinus;
  public faPlus: IconDefinition = faPlus;
  public faTrashAlt: IconDefinition = faTrashAlt;
  public faHeart: IconDefinition = faHeart;

  @Input()
  public product!: Product;

  constructor(private shoppingCartService: ShoppingCartService) { }

  public increaseAmount(): void {
   this.shoppingCartService.add(this.product);
  }

  public decreaseAmount(): void {
    this.shoppingCartService.decrease(this.product);
  }

  public remove(): void {
    this.shoppingCartService.remove(this.product);
  }

}
