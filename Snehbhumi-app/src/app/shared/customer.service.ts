import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { CustomerModel } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  postCustomer(customer: CustomerModel) {
    return this._httpClient.post(environment.apiBaseUrl + '/addcustomer', customer);
  }

  getCustomerList(): any {
    return this._httpClient.get(environment.apiBaseUrl + '/landingpage');
  }
}
