import { ProductModel } from './product.model';
export class BasketModel{
  id: number = 0;
  product: ProductModel;
  quantity: number = 0;
}
