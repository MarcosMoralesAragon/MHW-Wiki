import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Monstruo } from '../models/monstruo';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

    cualVer:number = 0 

    constructor(private firestore: Firestore) { }

    getMonstruosFirebase(): Observable<Monstruo[]> {
        return collectionData(collection(this.firestore, 'monsterList'), {idField: 'idFirebase'}) as Observable<Monstruo[]>;
    }
    
    async addMonster(monster: Monstruo) {
        try {
            const docRef = await addDoc(collection(this.firestore, "monsterList"), monster);
        } catch (e) {
            console.error("Error adding document: ", e);
        }    
    }

    establecerCualVer(idCualVer : number){
        this.cualVer = idCualVer
    }
    eleccionCualVer(){
        return this.cualVer
    }
}
