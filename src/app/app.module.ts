import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialdesignModule } from './materialdesign.module';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialdesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
