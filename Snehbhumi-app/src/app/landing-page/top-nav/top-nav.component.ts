import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  private _userService: UserService;
  private _router: Router;

  constructor(userService: UserService, router: Router) {
    this._userService = userService;
    this._router = router;
  }

  ngOnInit() {}

  onDashboard(): void {
    this._router.navigateByUrl('/userprofile');
  }

  public onAddAdmin(): void {
    this._router.navigateByUrl('/userprofile/addadmin');
  }

  public onAddCustomer(): void {
    this._router.navigateByUrl('/userprofile/addcustomer');
  }

  public onUserProfile(): void {
    this._router.navigateByUrl('/userprofile');
  }

  public onLogout(): void {
    this._userService.deleteToken();
    this._router.navigateByUrl('/login');
  }
}
