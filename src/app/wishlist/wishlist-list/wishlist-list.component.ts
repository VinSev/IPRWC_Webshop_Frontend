import {Component, Input} from '@angular/core';
import {Product} from "../../products/product.model";

@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.scss']
})
export class WishlistListComponent {
  @Input()
  public products!: Product[];

  constructor() { }

}
