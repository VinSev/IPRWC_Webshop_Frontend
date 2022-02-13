import { Injectable } from '@angular/core';
import {Product} from "../products/product.model";
import {NotificationService} from "../notification/notification.service";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private _products: Product[] = [];

  constructor(private notificationService: NotificationService) { }

  public get products(): Product[] {
    return this._products;
  }

  public set products(value: Product[]) {
    this._products = value;
  }

  public add(product: Product) {
    let index: number = this.findIndex(product);
    if(this.exists(index)) {
      this.notificationService.toastrWarning("Product already present in Wishlist");
      return;
    }
    this.notificationService.toastrInfo("Product added to Wishlist");
    this._products.push(product);
  }

  public remove(product: Product) {
    let index: number = this.findIndex(product);
    if(this.exists(index)) {
      this.notificationService.toastrWarning("Product is not present in Wishlist");
      return;
    }
    this.notificationService.toastrInfo("Product removed from Wishlist");
    this._products.splice(index, 1);
  }

  public isEmpty(): boolean {
    return this._products == null || this._products.length == 0;
  }

  public getTotalAmountOfProducts(): number {
    return this._products.length;
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
