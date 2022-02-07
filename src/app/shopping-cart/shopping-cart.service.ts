import { Injectable } from '@angular/core';
import {Product} from "../products/product.model";
import {NotificationService} from "../notification/notification.service";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private _products: Product[] = [];
  private _shippingCost: number = 10;

  constructor(private notificationService: NotificationService) { }

  public get products(): Product[] {
    return this._products;
  }

  public set products(value: Product[]) {
    this._products = value;
  }

  public get shippingCost(): number {
    return this._shippingCost;
  }

  public set shippingCost(value: number) {
    this._shippingCost = value;
  }

  public add(product: Product): void {
    let index: number = this.findIndex(product);
    if(this.exists(index)) {
      this.notificationService.toastrInfo("Product amount increased");
      this._products[index].amount++;
      return;
    }
    this.notificationService.toastrInfo("Product Added to Cart");
    product.amount = 1;
    this._products.push(product);
  }

  public decrease(product: Product) {
    let index: number = this.findIndex(product);
    if(product.amount == 0) {
      this.notificationService.toastrWarning("Amount can't be lower than 0");
      return;
    }
    this.notificationService.toastrInfo("Product amount decreased");
    this._products[index].amount--;
  }

  public remove(product: Product): void {
    let index: number = this.findIndex(product);
    if(!this.exists(index)) {
      this.notificationService.toastrWarning("Item does not exist in Cart");
      return;
    }
    this.notificationService.confirmationDelete("Are you sure you want to delete this product?", "Delete Product")
      .then(result => {
        if(result.value) {
          this.notificationService.toastrInfo("Product Removed from Cart");
          this._products.splice(index, 1);
        }
      });
  }

  public isEmpty(): boolean {
    return this._products == null || this._products.length == 0;
  }

  public getTotalAmountOfProducts(): number {
    let totalAmount: number = 0;
    this._products.forEach(product => {
      totalAmount += product.amount;
    });
    return totalAmount;
  }

  public getTotalPrice(): number {
    let totalPrice: number = 0;
    this._products.forEach(product => {
      totalPrice += product.price * product.amount;
    });
    return totalPrice + this.shippingCost;
  }

  public clear(): void {
    this._products = [];
  }

  private exists(index: number) {
    return index != -1;
  }

  private findIndex(product: Product) {
    return this._products.findIndex((value: Product) => value.name == product.name);
  }

}
