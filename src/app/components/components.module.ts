import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsRoutingModule } from './components-routing.module';
import { MaterialdesignModule } from './../modules/materialdesign.module';

import { SigninComponent } from './signin/signin.component';
import { MngDashboardComponent } from './mng-dashboard/mng-dashboard.component';
import { TmnLoginComponent } from './tmn-login/tmn-login.component';
import { TmnRatingComponent } from './tmn-rating/tmn-rating.component';
import { MngCompanyAddComponent } from './mng-company-add/mng-company-add.component';
import { SignupComponent } from './signup/signup.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialdesignModule,

    // routing
    ComponentsRoutingModule
  ],
  declarations: [
    MngCompanyAddComponent,
    MngDashboardComponent,
    NavbarComponent,
    TmnLoginComponent,
    TmnRatingComponent,
    SigninComponent,
    SignupComponent,
    SidebarComponent,
  ],
  exports: [
    MngCompanyAddComponent,
    MngDashboardComponent,
    NavbarComponent,
    TmnLoginComponent,
    TmnRatingComponent,
    SigninComponent,
    SignupComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
