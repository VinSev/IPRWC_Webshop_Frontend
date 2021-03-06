import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Product} from "./product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]> {
    return this.http
      .get<Product[]>(`${environment.baseURL}/products`);
  }

  public add(product: ProductRequest): Observable<Product> {
    return this.http
      .post<Product>(`${environment.baseURL}/products`, product);
  }

  public delete(product: Product): Observable<Product> {
    return this.http
      .delete<Product>(`${environment.baseURL}/products`, { body: product });
  }

  public update(product: Product): Observable<Product> {
    return this.http
      .put<Product>(`${environment.baseURL}/products`, product);
  }
}

type ProductRequest = {
  name: string,
  description: string,
  price: number,
  imageLink: string
}
