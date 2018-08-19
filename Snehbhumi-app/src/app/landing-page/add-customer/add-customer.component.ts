import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CustomerService } from '../../shared/customer.service';
import { CustomerModel } from '../../shared/customer.model';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
  providers: [CustomerModel]
})
export class AddCustomerComponent implements OnInit {
  public showSuccessMessage: boolean;
  public serverErrorMessages: string;
  public customer: CustomerModel;
  private _customerService: CustomerService;

  constructor(customerService: CustomerService, customerModel: CustomerModel) {
    this._customerService = customerService;
    this.customer = customerModel;
  }

  ngOnInit() {}

  public onSubmit(form: NgForm) {
    this._customerService.postCustomer(form.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 2000);
        form.resetForm();
      },
      err => {
        this.showSuccessMessage = false;
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        } else {
          this.serverErrorMessages = 'Something went wrong. Please contact admin.';
        }
      }
    );
  }
}
