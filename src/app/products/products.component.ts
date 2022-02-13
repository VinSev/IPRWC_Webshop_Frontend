import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "./product.model";
import {ProductService} from "./product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public searchText: any;

  public products!: Product[];
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

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
