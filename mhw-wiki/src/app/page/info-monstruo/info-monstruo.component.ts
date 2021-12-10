import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Monstruo } from 'src/app/models/monstruo';
import { ItemService } from 'src/app/services/item.service';
import { MonsterService } from 'src/app/services/monster.service';

@Component({
  selector: 'app-info-monstruo',
  templateUrl: './info-monstruo.component.html',
  styleUrls: ['./info-monstruo.component.scss']
})
export class InfoMonstruoComponent implements OnInit {

  stats : any
  items : any
  listaItems : Item[] = []
  inmunidad : string[] = []
  monstruo : Monstruo[] = []
  idMonstruo : number = 0

  constructor(private monstruoService : MonsterService,
              private itemService : ItemService) { 
    this.idMonstruo = this.monstruoService.eleccionCualVer()
    this.monstruo = this.monstruoService.getMonstruos().filter(monstruo => monstruo.id == this.idMonstruo)
    this.listaItems = this.itemService.getItems().filter(item => item.idDeDondeViene == this.idMonstruo)
  }

  elementoNoMostrado() : boolean{
    var elementoIgualA0 : boolean = false
    var arrayStats = this.monstruo[0].stats
    for (let index = 0; index < arrayStats.length; index++) {
      if(arrayStats[index] == 0){
        elementoIgualA0 = true;
        this.inmunidad.push(this.getElemento(index))
      }
    }
    return elementoIgualA0
  }

  getElemento(index : number) : string{
    var elementos = ['Fuego','Agua','Rayo','Hielo','Draco','Veneno','Sueño','Paralisis','Nitro','Aturdimiento']
    return elementos[index]
  }

  ngOnInit(): void {

    this.stats = {
      labels: ['Fuego','Agua','Rayo','Hielo','Draco','Veneno','Sueño','Paralisis','Nitro','Aturdimiento'],
      datasets: [
          {
              data:[this.monstruo[0].stats[0],
                    this.monstruo[0].stats[1],
                    this.monstruo[0].stats[2],
                    this.monstruo[0].stats[3],
                    this.monstruo[0].stats[4],
                    this.monstruo[0].stats[5],
                    this.monstruo[0].stats[6],
                    this.monstruo[0].stats[7],
                    this.monstruo[0].stats[8],
                    this.monstruo[0].stats[9]],

              backgroundColor: [
                  "#FF6961",
                  "#80CEE1",
                  "#FDFD96",
                  "#E7EBDA",
                  "#0F130C",
                  "#B19CD9",
                  "#CAE7C1",
                  "#836953",
                  "orange",
                  "bisque"
              ],
              hoverBackgroundColor: [
                "#FF6961",
                "#80CEE1",
                "#FDFD96",
                "#E7EBDA",
                "#0F130C",
                "#B19CD9",
                "#CAE7C1",
                "#836953",
                "orange",
                "bisque"
              ]
          }
      ]
    }
   
    var nombreItems = []
    for (let index = 0; index < this.listaItems.length; index++) {
      nombreItems.push(this.listaItems[index].nombre)
    }
    var probabilidadItems = []
    for (let index = 0; index < this.listaItems.length; index++) {
      probabilidadItems.push(this.listaItems[index].ratio)
    }
    
    this.items = {
      labels: nombreItems,
      datasets: [
          {
              label: 'Ratio aparición',
              backgroundColor: 'orange',
              data: probabilidadItems
          }
      ]
    }
  }
}
