import { BasketService } from './../../services/basket.service';
import { ProductService } from './../../services/product.service';
import { BasketModel } from './../../models/basket.model';
import { ProductModel } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: ProductModel[] = []
  constructor(
    private _product: ProductService,
    private _basket: BasketService
  ) {
    this._product.getList(()=> this.products = _product.products)
   }

  ngOnInit(): void {
  }


  addBasket(product: ProductModel){
    let basketModel = new BasketModel();
    basketModel.product = product;
    basketModel.quantity = 1;

    this._basket.post(basketModel);
  }

}
