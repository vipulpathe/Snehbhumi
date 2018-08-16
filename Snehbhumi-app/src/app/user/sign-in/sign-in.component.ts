import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public serverErrorMessages: string;
  private _userService: UserService;
  private _router: Router;

  constructor(userService: UserService, router: Router) {
    this._userService = userService;
    this._router = router;
  }

  model = {
    email: '',
    password: ''
  };

  ngOnInit() {
    if (this._userService.isLoggedIn()) {
      this._router.navigateByUrl('/userprofile');
    }
  }

  public onSubmit(form: NgForm) {
    this._userService.login(form.value).subscribe(
      res => {
        this._userService.setToken(res['token']);
        this._router.navigateByUrl('/userprofile');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }
}
