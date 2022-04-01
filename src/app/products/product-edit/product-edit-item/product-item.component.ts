import {Component, Input} from '@angular/core';
import {Product} from "../../product.model";
import {IconDefinition, faBan} from "@fortawesome/free-solid-svg-icons";
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
  public faBan: IconDefinition = faBan

  private subscription!: Subscription;

  @Input()
  public products!: Product[]
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

  public add(): void {

  }

  public delete(): void {
    let index: number = this.findIndex(this.product);
    if(!this.exists(index)) {
      this.notificationService.toastrWarning("Products does not exist");
      return;
    }
    this.notificationService.confirmationDelete("Are you sure you want to delete this product?", "Delete Product")
      .then(result => {
        if(result.value) {
          this.subscription = this.productService.delete(this.product)
            .subscribe({
              complete: () => {
                this.notificationService.toastrInfo("Product Removed");
                this.products.splice(index, 1);
              },
              error: () => {
                this.notificationService.toastrError("Something went wrong, please try again");
              }
            });
        }
      });
  }

  private exists(index: number) {
    return index != -1;
  }

  private findIndex(product: Product) {
    return this.products.findIndex((value: Product) => value.name == product.name);
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
