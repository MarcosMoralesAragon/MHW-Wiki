import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
import { MonsterService } from 'src/app/services/monster.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items : Item[] = []
  filtro : string = ""

  constructor(private itemService : ItemService,
              private monstruoService : MonsterService) { }

  aQueMonstruoPertenece(idMonstruo: number){
    var monstruo = this.monstruoService.getMonstruos().find(monstruo => monstruo.id == idMonstruo)
    return monstruo?.nombre
  }

  async filtar(){
    if(this.filtro == ""){
      this.items = this.itemService.getItems()
    } else {
      var idMonstruo = this.monstruoService.getMonstruos().find(monstruo => monstruo.nombre == this.filtro)?.id
      console.log(idMonstruo)
      if(idMonstruo != undefined){
        this.items = this.itemService.getItems().filter(item => item.idDeDondeViene === idMonstruo)
      } else {
        this.items = []
      }
    }
  }

  ngOnInit(): void {
    this.items = this.itemService.getItems()
  }

}
