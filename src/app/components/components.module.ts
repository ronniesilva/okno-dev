import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { MaterialdesignModule } from './../modules/materialdesign.module';
import { SigninComponent } from './signin/signin.component';
import { MngDashboardComponent } from './mng-dashboard/mng-dashboard.component';
import { TmnLoginComponent } from './tmn-login/tmn-login.component';
import { TmnRatingComponent } from './tmn-rating/tmn-rating.component';
import { MngCompanyAddComponent } from './mng-company-add/mng-company-add.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialdesignModule,

    // routing
    ComponentsRoutingModule
  ],
  declarations: [
    SigninComponent,
    MngDashboardComponent,
    TmnLoginComponent,
    TmnRatingComponent,
    MngCompanyAddComponent
  ],
  exports: [
    SigninComponent
  ]
})
export class ComponentsModule { }
