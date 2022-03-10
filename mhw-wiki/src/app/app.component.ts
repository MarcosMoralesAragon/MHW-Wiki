import { Component } from '@angular/core';
import { ItemService } from './services/item.service';
import { MonsterService } from './services/monster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mhw-wiki';
}
