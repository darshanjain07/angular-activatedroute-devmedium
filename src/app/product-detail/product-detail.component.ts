import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductService
  ) { }

  public productId: number;
  public productDetail: any;

  ngOnInit() {
    this._activatedRoute.params.forEach((params: Params) => {
      this.productId = params['id'];
      let product = this._productService.getProductDetailById(this.productId);
      if (product.length > 0) {
        this.productDetail = product[0];
      }
    });
  }
}
