import { BasketModel } from './../../models/basket.model';
import { ProductModel } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BasketActions from '../../state/baskets/baskets.actions'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: ProductModel[] = []
  constructor(
    private store: Store<{"baskets": BasketModel[]}>
  ) {
   }

  ngOnInit(): void {
    this.setProducts();
  }


  setProducts() {
    for (let i = 0; i < 100; i++) {
      let product = new ProductModel();
      product.id = i;
      product.name = `Product${i}`,
      product.unitPrice = i * 10,
      product.stock = i*100;

      this.products.push(product);
    }
  }

  addBasket(product: ProductModel){
    let basketModel = new BasketModel();
    basketModel.product = product;
    basketModel.quantity = 1;

    this.store.dispatch(BasketActions.addBasket({basket: basketModel}))
  }

}
