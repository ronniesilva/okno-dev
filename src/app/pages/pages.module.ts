import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialdesignModule } from './../modules/materialdesign.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from './../components/components.module';

import { HomeComponent } from './home/home.component';
import { ManagerComponent } from './manager/manager.component';
import { TerminalComponent } from './terminal/terminal.component';

@NgModule({
  imports: [
    CommonModule,

    // Modulo de roteamento
    PagesRoutingModule,

    // Modulos
    ComponentsModule,
    MaterialdesignModule
  ],
  declarations: [
    HomeComponent,
    ManagerComponent,
    TerminalComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
