import {Component, Input} from '@angular/core';
import {Product} from "../../../products/product.model";
import {faShoppingCart, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {faTrashAlt} from "@fortawesome/free-regular-svg-icons";
import {WishlistService} from "../../wishlist.service";
import {ShoppingCartService} from "../../../shopping-cart/shopping-cart.service";

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.scss']
})
export class WishlistItemComponent {
  public faTrashAlt: IconDefinition = faTrashAlt;
  public faShoppingCart: IconDefinition = faShoppingCart;

  @Input()
  public product!: Product;

  constructor(private wishlistService: WishlistService,
              private shoppingCartService: ShoppingCartService) { }

  public add(): void {
    this.shoppingCartService.add(this.product);
  }

  public remove(): void {
    this.wishlistService.remove(this.product);
  }

}
