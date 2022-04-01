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

    searchText = searchText.toUpperCase()

    let products: Product[] = [];
    for(let product of value) {
      let name: string = product.name.toUpperCase();
      let description: string = product.description.toUpperCase();
      if(name.includes(searchText) || description.includes(searchText)) {
        products.push(product);
      }
    }
    return products;
  }

}
