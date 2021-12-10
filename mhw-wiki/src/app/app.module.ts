import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {ChartModule} from 'primeng/chart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonstruosComponent } from './page/monstruos/monstruos.component';
import { ItemsComponent } from './page/items/items.component';
import { InfoMonstruoComponent } from './page/info-monstruo/info-monstruo.component';

@NgModule({
  declarations: [
    AppComponent,
    MonstruosComponent,
    ItemsComponent,
    InfoMonstruoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    TableModule,
    InputTextModule,
    FormsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
