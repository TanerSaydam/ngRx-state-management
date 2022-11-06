import { BasketModel } from './../../models/basket.model';
import { createAction, props } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';
import * as BasketActions from './baskets.actions'

export const initialState: BasketModel[]  = [];

export const BasketsReducer = createReducer(
  initialState,
  on(BasketActions.addBasket, (state, {basket}) => {
    return [...state, basket]
  })
)
