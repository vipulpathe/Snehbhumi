import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { appRoutes } from './routes';

import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from 'src/app/shared/user.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TopNavComponent } from './landing-page/top-nav/top-nav.component';
import { AddCustomerComponent } from './landing-page/add-customer/add-customer.component';
import { AddAdminComponent } from './landing-page/add-admin/add-admin.component';
import { DashboardComponent } from './landing-page/dashboard/dashboard.component';
import { UserProfileComponent } from './landing-page/user-profile/user-profile.component';
import { UpdateCustomerInfoComponent } from './landing-page/dashboard/update-customer-info/update-customer-info.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    LandingPageComponent,
    TopNavComponent,
    AddCustomerComponent,
    AddAdminComponent,
    DashboardComponent,
    UpdateCustomerInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    AgGridModule.withComponents([])
  ],
  entryComponents: [UpdateCustomerInfoComponent],
  exports: [DashboardComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
