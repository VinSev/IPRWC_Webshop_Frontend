import {Component} from '@angular/core';
import {Product} from "../product.model";
import {Subscription} from "rxjs";
import {ProductService} from "../product.service";
import {NotificationService} from "../../notification/notification.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  public products: Product[] = [];
  public subscription!: Subscription

  constructor(private productService: ProductService,
              private notificationService: NotificationService) { }

  public ngOnInit(): void {
    this.getProducts()
  }

  private getProducts(): void {
    this.subscription = this.productService.getAll()
      .subscribe({
        next: response => {
          this.products = response;
        }
      });
  }

  public add(name: string, description: string, price: number, imageLink: string, form: NgForm) {
    this.subscription = this.productService.add({name, description, price, imageLink})
      .subscribe({
        complete: () => {
          this.notificationService.toastrSuccess("Product added");
          this.getProducts();
          form.reset();
        },
        error: () => {
          this.notificationService.toastrError("Something went wrong, please try again");
        }
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
