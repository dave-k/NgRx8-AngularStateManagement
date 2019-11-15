import { createAction, props } from '@ngrx/store';
import { Customer } from './models/customer';

export const add = createAction('[Customer Component] Add', 
  props<{ payload: Customer }>());
export const remove = createAction('[Customer Component] Remove',
  props<{ payload: Customer }>());