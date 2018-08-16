import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public userDetails: any;
  private _userService: UserService;
  private _router: Router;

  constructor(userService: UserService, router: Router) {
    this._userService = userService;
    this._router = router;
  }

  ngOnInit() {
    this._userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => {}
    );
  }

  onLogout() {
    this._userService.deleteToken();
    this._router.navigateByUrl('/login');
  }
}
