import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../shared/customer.service';
import { CustomerModel } from '../../shared/customer.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public rowData: any;
  private _customerService: CustomerService;

  columnDefs = [
    { headerName: 'First Name', field: 'firstName' },
    { headerName: 'Last Name', field: 'lastName' },
    { headerName: 'Gender', field: 'gender' },
    { headerName: 'Date of Birth', field: 'dob' },
    { headerName: 'Contact number', field: 'mobileNumber' },
    { headerName: 'Email ID', field: 'emailId' },
    { headerName: 'Qualification', field: 'qualification' },
    { headerName: 'Date of Membership', field: 'dateOfMembership' },
    { headerName: 'Is member?', field: 'membershipApproved' },
    { headerName: 'Amount deposited', field: 'depositAmount' },
    { headerName: 'Approved by', field: 'approvedBy' }
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
