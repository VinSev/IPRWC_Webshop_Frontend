import {Component, Input} from '@angular/core';
import {Product} from "../product.model";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {faEdit} from "@fortawesome/free-regular-svg-icons";
import {AuthService} from "../../authentication/auth.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent{
  public faEdit: IconDefinition = faEdit;
  public searchText: any;

  constructor(public authService: AuthService) {
  }

  @Input()
  public products: Product[] = [];
}
