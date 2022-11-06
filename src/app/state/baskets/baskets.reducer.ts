import { BasketModel } from './../../models/basket.model';
import { createAction, props } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';

export const BasketsReducer = createReducer(
  0,
  on(createAction("[Baskets] Add Count"), (state) => state += 1)
)
