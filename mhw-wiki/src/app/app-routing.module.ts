import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoMonstruoComponent } from './page/info-monstruo/info-monstruo.component';
import { ItemsComponent } from './page/items/items.component';
import { MonstruosComponent } from './page/monstruos/monstruos.component';

const routes: Routes = [
  {path: 'monstruos', component: MonstruosComponent},
  {path: 'items', component: ItemsComponent},
  {path : 'info-monstruo' , component : InfoMonstruoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
