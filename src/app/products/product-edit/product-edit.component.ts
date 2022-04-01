import {Component, Input} from '@angular/core';
import {Product} from "../product.model";
import {Subscription} from "rxjs";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  public products: Product[] = [];
  public subscription!: Subscription

  constructor(private productService: ProductService) { }

  public ngOnInit(): void {
    this.subscription = this.productService.getAll()
      .subscribe({
        next: response => {
          this.products = response;
        }
      });
  }

  public add(name: string, description: string, price: number, image: string) {

  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
