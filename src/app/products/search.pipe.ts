import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "./product.model";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  public transform(value: Product[], searchText: string): Product[] {
    if(value == null || value.length == 0 || searchText == null) {
      return value;
    }
    let products: Product[] = [];
    for(let product of value) {
      if(product.name.includes(searchText) || product.description.includes(searchText)) {
        products.push(product);
      }
    }
    return products;
  }

}
