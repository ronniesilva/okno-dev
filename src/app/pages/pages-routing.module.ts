import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ManagerComponent } from './manager/manager.component';
import { TerminalComponent } from './terminal/terminal.component';
import { SigninComponent } from '../components/signin/signin.component';
import { SignupComponent } from './../components/signup/signup.component';
import { MngCompanyAddComponent } from '../components/mng-company-add/mng-company-add.component';
import { TmnLoginComponent } from '../components/tmn-login/tmn-login.component';
import { MngDashboardComponent } from '../components/mng-dashboard/mng-dashboard.component';

const pagesRoutes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', component: SigninComponent },
      { path: 'signup', component: SignupComponent }
    ]
  },
  {
    path: 'manager', component: ManagerComponent, children: [
      { path: '', component: MngDashboardComponent },
      { path: 'manager/:id', component: MngDashboardComponent },
      { path: 'dashboard', component: MngDashboardComponent },
      { path: 'companyadd', component: MngCompanyAddComponent },
    ]
  },
  {
    path: 'terminal', component: TerminalComponent, children: [
      { path: '', component: TmnLoginComponent }
    ]
  },
  {
    path: 'logout',  redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
