import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from './../components/components.module';
import { MaterialdesignModule } from './../modules/materialdesign.module';

// ngx-bootstrap
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

// Minha Paginas
import { HomeComponent } from './home/home.component';
import { ManagerComponent } from './manager/manager.component';
import { TerminalComponent } from './terminal/terminal.component';


@NgModule({
  imports: [
    CommonModule,

    // ngx-bootstrap
    AlertModule,
    BsDropdownModule,
    TooltipModule,
    ModalModule,

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
