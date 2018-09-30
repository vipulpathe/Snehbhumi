import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../shared/customer.service';
import { CustomerModel } from '../../shared/customer.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public rowData: any;
  private _customerService: CustomerService;

  columnDefs = [
    { headerName: 'First Name', field: 'firstName', width: 100 },
    { headerName: 'Last Name', field: 'lastName', width: 100 },
    { headerName: 'Gender', field: 'gender', width: 50 },
    {
      headerName: 'Date of Birth',
      field: 'dob',
      width: 70
    },
    { headerName: 'Contact number', field: 'mobileNumber', width: 100 },
    { headerName: 'Email ID', field: 'emailId', width: 100 },
    { headerName: 'Qualification', field: 'qualification', width: 90 },
    { headerName: 'Date of Membership', field: 'dateOfMembership', width: 70 },
    { headerName: 'Is member?', field: 'membershipApproved', width: 50 },
    { headerName: 'Amount deposited', field: 'depositAmount', width: 100 },
    { headerName: 'Approved by', field: 'approvedBy', width: 70 }
  ];

  constructor(customerService: CustomerService) {
    this._customerService = customerService;
  }

  ngOnInit() {
    this.refreshCutomerList();
  }

  private refreshCutomerList(): any {
    return this._customerService.getCustomerList().subscribe(res => {
      this.rowData = res as CustomerModel[];
    });
  }
}
