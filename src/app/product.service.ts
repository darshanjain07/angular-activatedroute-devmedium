import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = [
    { id: 1, name: 'Product A', description: 'This is product A' },
    { id: 2, name: 'Product B', description: 'This is product B' },
    { id: 3, name: 'Product C', description: 'This is product C' },
    { id: 4, name: 'Product D', description: 'This is product D' },
    { id: 5, name: 'Product E', description: 'This is product E' },
  ];
  constructor() { }

  // returning the list of products.
  getProductList() {
    return this.products;
  }

  // returning the specific product based on the product id.
  getProductDetailById(id) {
    return this.products.filter((product) => {
      return (product.id == id)
    })
  }
}
