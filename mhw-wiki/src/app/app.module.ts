import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CardModule} from 'primeng/card';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
