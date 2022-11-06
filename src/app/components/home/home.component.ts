import { ProductModel } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: ProductModel[] = []
  constructor(
    private store: Store
  ) { }

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

  addBasket(){
    this.store.dispatch({"type": "[Baskets] Add Count"})
  }

}
