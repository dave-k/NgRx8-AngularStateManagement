import { Action, createReducer, on } from '@ngrx/store';
import * as CustomerActions from './customer.actions';
import { Customer } from './models/customer';

export const initialState = [];

const _customerReducer = createReducer(
  initialState,
  on(CustomerActions.add, (state: Customer[], { payload }) => {
    return [...state, payload];
  }),
  on(CustomerActions.remove, (state: Customer[], { payload }) => {
    return [...state.filter(item => item !== payload)]
  })
);

export function CustomerReducer(state: Customer[], action: Action) {
  return _customerReducer(state, action);
}