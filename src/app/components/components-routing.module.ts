import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { MngDashboardComponent } from './mng-dashboard/mng-dashboard.component';
import { TmnRatingComponent } from './tmn-rating/tmn-rating.component';


const componentsRoutes: Routes = [
   { path: 'rating/:id', component: TmnRatingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(componentsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentsRoutingModule { }
