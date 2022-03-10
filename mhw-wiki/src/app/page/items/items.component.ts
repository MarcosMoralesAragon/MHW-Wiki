import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Item } from 'src/app/models/item';
import { Monstruo } from 'src/app/models/monstruo';
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
  monstruos : Monstruo[] = []

  constructor(private itemService : ItemService,
              private monstruoService : MonsterService) { }

  aQueMonstruoPertenece(idMonstruo: number){
    var monstruo = this.monstruos.find(monstruo => monstruo.id == idMonstruo)
    return monstruo?.nombre
  }

  async filtar(){
    if(this.filtro == ""){
      this.itemService.getItemsFirebase().subscribe( items => {
        this.items = items
      })
    } else {
      this.monstruoService.getMonstruosFirebase().subscribe(monstruos => {
        var idMonstruo = monstruos.find(monstruo => monstruo.nombre == this.filtro)?.id
        if(idMonstruo != undefined){
          this.items = this.itemService.getItems().filter(item => item.idDeDondeViene === idMonstruo)
        } else {
          this.items = []
        }
      })
    }
  }

  ngOnInit(): void {
    this.monstruoService.getMonstruosFirebase().subscribe(monstruos => {
      this.monstruos = monstruos
    })
    this.itemService.getItemsFirebase().subscribe( items => {
      this.items = items
      console.log(this.monstruos)
    })
    console.log(this.monstruos)
  }

}
