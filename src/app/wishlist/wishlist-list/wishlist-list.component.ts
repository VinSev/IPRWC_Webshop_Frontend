import {Component, Input} from '@angular/core';
import {Product} from "../../products/product.model";
import {WishlistService} from "../wishlist.service";

@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.scss']
})
export class WishlistListComponent {
  @Input()
  public products!: Product[];

  constructor(public wishlistService: WishlistService) { }

}
