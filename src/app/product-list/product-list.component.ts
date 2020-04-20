import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList: any = [];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.productList = this._productService.getProductList();
  }

}
