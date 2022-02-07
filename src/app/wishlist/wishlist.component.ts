import { Component } from '@angular/core';
import {WishlistService} from "./wishlist.service";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

  constructor(public wishlistService: WishlistService) { }

}
