import { BasketModel } from './../../models/basket.model';
import { createAction, props } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';

export const BasketsReducer = createReducer(
  [],
  on(createAction("[Baskets] Add Count", props<{"basket": BasketModel}>()), (state, {basket}) => {
    return [...state, basket]
  })
)
