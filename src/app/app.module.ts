import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

import { AuthService } from './providers/auth.service';

import { AppComponent } from './app.component';
import { CompaniesService } from './providers/companies.service';
import { RatingService } from './providers/rating.service';
import { UsersService } from './providers/users.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    PagesModule,

    // Routing
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    CompaniesService,
    RatingService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
