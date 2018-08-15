import { Routes } from '@angular/router';

import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from 'src/app/user/user.component';
import { Component } from '@angular/core';

export const appRoutes: Routes = [
  {
    path: 'signup',
    component: UserComponent,
    children: [
      {
        path: '',
        component: SignUpComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  }
];
