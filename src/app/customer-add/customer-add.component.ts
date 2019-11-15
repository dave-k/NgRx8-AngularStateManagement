import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';
import * as CustomerActions from '../customer.actions';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  name:string = '';
  customers: Observable<Customer[]>; 

  constructor(private store: Store<{ customers: Customer[] }>) { 
    this.customers = store.pipe(select('customers'));    
  }

  ngOnInit() {
  }

  addCustomer(name: string) {
    const customer = new Customer();
    customer.name = name;
    this.store.dispatch(CustomerActions.add( { payload: customer }));
    this.name = '';
  }
}
