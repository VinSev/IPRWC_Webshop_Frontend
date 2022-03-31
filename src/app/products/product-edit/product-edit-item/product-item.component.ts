import {Component, Input} from '@angular/core';
import {Product} from "../../product.model";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {faTrashAlt, faEdit, faSave} from "@fortawesome/free-regular-svg-icons";
import {ProductService} from "../../product.service";
import {NotificationService} from "../../../notification/notification.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-edit-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductEditItemComponent {
  public faTrashAlt: IconDefinition = faTrashAlt;
  public faEdit: IconDefinition = faEdit;
  public faSave: IconDefinition = faSave;

  private subscription!: Subscription;

  @Input()
  public product!: Product;

  public isEditing: boolean = false;

  constructor(private productService: ProductService,
              private notificationService: NotificationService) {
  }

  public save(name: string, description: string, price: number): void {
    this.product.name = name;
    this.product.description = description;
    this.product.price = price;

    console.log("save")

    this.subscription = this.productService.update(this.product)
      .subscribe({
        complete: () => {
          this.notificationService.toastrSuccess("Product updated");
        },
        error: () => {
          this.notificationService.toastrError("Something went wrong, please try again");
        }
      });

    this.isEditing = false;
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
