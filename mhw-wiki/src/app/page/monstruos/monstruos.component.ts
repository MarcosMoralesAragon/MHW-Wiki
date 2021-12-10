import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Monstruo } from 'src/app/models/monstruo';
import { MonsterService } from 'src/app/services/monster.service';

@Component({
  selector: 'app-monstruos',
  templateUrl: './monstruos.component.html',
  styleUrls: ['./monstruos.component.scss']
})
export class MonstruosComponent implements OnInit {

  monstruos : Monstruo [] = []

  constructor(private monstruosService : MonsterService,
              private route:Router) { }

  irAMonstruoInfo(idCualVer : number){
    this.monstruosService.establecerCualVer(idCualVer)
    this.route.navigateByUrl('info-monstruo')
  }
  ngOnInit(): void {
    this.monstruos = this.monstruosService.getMonstruos()
  }

}
