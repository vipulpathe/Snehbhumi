import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';

import { tap } from 'rxjs/operators';

import { UserService } from '../shared/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private _userService: UserService;
  private _router: Router;

  constructor(userService: UserService, router: Router) {
    this._userService = userService;
    this._router = router;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.headers.get('noauth')) {
      return next.handle(req.clone());
    } else {
      const clonedRequest = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + this._userService.getToken())
      });

      return next.handle(clonedRequest).pipe(
        tap(
          event => {},
          err => {
            if (err.error.auth === false) {
              this._router.navigateByUrl('/login');
            }
          }
        )
      );
    }
  }
}
