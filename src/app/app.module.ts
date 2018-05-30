import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { NgxBootstrapRootModule } from './modules/ngx-bootstrap-root.module';

import { AuthService } from './providers/auth.service';

import { AppComponent } from './app.component';
import { CompaniesService } from './providers/companies.service';
import { RatingService } from './providers/rating.service';
import { UsersService } from './providers/users.service';

// Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    PagesModule,
    NgxBootstrapRootModule,

    // Routing
    AppRoutingModule,

    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule
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
