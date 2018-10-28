import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-update-customer-info',
  templateUrl: './update-customer-info.component.html',
  styleUrls: ['./update-customer-info.component.css']
})
export class UpdateCustomerInfoComponent implements OnInit {
  @Input() public data: any;

  constructor() {
  }

  ngOnInit() {
    // this.showData();
  }

  private showData(): void {
    console.log(this.data);
  }
}
