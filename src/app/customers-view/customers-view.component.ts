import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as CustomerActions from '../customer.actions';

@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.css']
})
export class CustomersViewComponent implements OnInit {

  customers: Observable<Customer[]>;

  constructor(private store: Store<{ customers: Customer[] }>) {
    this.customers = store.pipe(select('customers'));
    // store.select(state => state).subscribe( val => console.log(val));
  }

  removeCustomer(customer) {
    this.store.dispatch(CustomerActions.remove( { payload: customer }));
  }

  ngOnInit() {
  }

}
