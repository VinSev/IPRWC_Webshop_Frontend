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

  }

  public remove(product: Product) {

  }

  private exists(index: number) {
    return index != -1;
  }

  private findIndex(product: Product) {
    return this._products.findIndex((value: Product) => value.name == product.name);
  }
}
