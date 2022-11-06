import { ProductModel } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api: string = " http://localhost:3000/products"
  products: ProductModel[] = [];
  constructor(
    private _http: HttpClient
  ) {
  }

  post(model: ProductModel, callBack: ()=> void){
    this._http.post(this.api,model).subscribe(res=> callBack());
  }

  getList(callBack: ()=> void){
    this._http.get<ProductModel[]>(this.api).subscribe(res=> {this.products = res; callBack()});
  }
}
