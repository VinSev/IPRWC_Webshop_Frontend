import { Injectable } from '@angular/core';
import {Order} from "./order.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Product} from "../products/product.model";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Order[]> {
    return this.http
      .get<Order[]>(`${environment.baseURL}/orders`);
  }

  public create(order: OrderRequest): Observable<Order> {
    return this.http
      .post<Order>(`${environment.baseURL}/orders`, order);
  }

  public delete(order: Order): Observable<Order> {
    return this.http
      .delete<Order>(`${environment.baseURL}/orders`, {body: order})
  }

}

type OrderRequest = {
  streetName: String,
  houseNumber: number,
  postcode: String,
  placeName: String,
  products: Product[],
  dateLastUpdated: String,
  id?: number
}
