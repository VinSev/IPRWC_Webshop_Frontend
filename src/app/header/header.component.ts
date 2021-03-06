import { Component } from '@angular/core';
import {AuthService} from "../authentication/auth.service";
import {faShoppingCart, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {ShoppingCartService} from "../shopping-cart/shopping-cart.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public faShoppingCart: IconDefinition = faShoppingCart
  public faHeart: IconDefinition = faHeart;

  constructor(public authService: AuthService,
              public shoppingCartService: ShoppingCartService) { }

}
