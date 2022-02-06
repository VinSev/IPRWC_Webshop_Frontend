import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../product.model";
import {faShoppingCart, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input()
  public product!: Product;
  public faEye: IconDefinition = faEye;
  public faHeart: IconDefinition = faHeart;
  public faShoppingCart: IconDefinition = faShoppingCart;

  constructor() { }

  ngOnInit(): void {
  }

}
