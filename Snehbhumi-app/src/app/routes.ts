import { Routes } from '@angular/router';

import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from 'src/app/user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddAdminComponent } from './landing-page/add-admin/add-admin.component';
import { AddCustomerComponent } from './landing-page/add-customer/add-customer.component';
import { DashboardComponent } from './landing-page/dashboard/dashboard.component';

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
    path: 'login',
    component: UserComponent,
    children: [
      {
        path: '',
        component: SignInComponent
      }
    ]
  },
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: SignInComponent
      }
    ]
  },
  {
    path: 'userprofile',
    component: LandingPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'addadmin',
        component: AddAdminComponent
      },
      {
        path: 'addcustomer',
        component: AddCustomerComponent
      },
      {
        path: 'editprofile',
        component: UserProfileComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
