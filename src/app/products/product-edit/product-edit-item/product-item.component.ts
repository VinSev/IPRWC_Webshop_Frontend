import {Component, Input} from '@angular/core';
import {Product} from "../../product.model";
import {faMinus, faPlus, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {faTrashAlt, faHeart} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-product-edit-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductEditItemComponent {
  public faMinus: IconDefinition = faMinus;
  public faPlus: IconDefinition = faPlus;
  public faTrashAlt: IconDefinition = faTrashAlt;
  public faHeart: IconDefinition = faHeart;

  @Input()
  public product!: Product;
}
