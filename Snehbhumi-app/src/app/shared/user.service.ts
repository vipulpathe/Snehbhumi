import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _httpClient: HttpClient;

  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  };

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  postUser(user: User) {
    return this._httpClient.post(environment.apiBaseUrl + '/register', user);
  }
}
