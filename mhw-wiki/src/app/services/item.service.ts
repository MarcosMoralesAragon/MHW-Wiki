import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items : Item[] = [{
      id : 0,
      nombre: "Escama de Anjanath",
      image: "../../assets/img/items/Icono-Escama_Rosa.webp",
      idDeDondeViene : 0,
      ratio: 50
    },{
      id : 1,
      nombre: "Piel de Anjanath",
      image: "../../assets/img/items/Icono-Piel_Rosa.webp",
      idDeDondeViene : 0,
      ratio: 40
    },{
      id : 2,
      nombre: "Colmillo de Anjanath",
      image: "../../assets/img/items/Icono-Garra_Rosa.webp",
      idDeDondeViene : 0,
      ratio: 40
    },{
      id : 3,
      nombre: "Placa de Anjanath",
      image: "../../assets/img/items/Icono-Placa_Rosa.webp",
      idDeDondeViene : 0,
      ratio: 10
    },{
      id : 4,
      nombre: "Hueso nasal de Anjanath",
      image: "../../assets/img/items/Icono-Hueso_Rosa.webp",
      idDeDondeViene : 0,
      ratio: 30
    },{
      id : 5,
      nombre: "Vesícula flamígera",
      image: "../../assets/img/items/Icono-Bolsa_Rojo.webp",
      idDeDondeViene : 0,
      ratio: 30
    },{
      id : 6,
      nombre: "Hueso monstruo grande",
      image: "../../assets/img/items/Icono-Hueso_Amarillo.webp",
      idDeDondeViene : 0,
      ratio: 30
    },{
      id : 7,
      nombre: "Concha Barroth",
      image: "../../assets/img/items/Icono-Concha_Marron.webp",
      idDeDondeViene : 1,
      ratio: 40
    },{
      id : 8,
      nombre: "Lomo Barroth",
      image: "../../assets/img/items/Icono-Parte_Naranja.webp",
      idDeDondeViene : 1,
      ratio: 30
    },{
      id : 9,
      nombre: "Garra Barroth",
      image: "../../assets/img/items/Icono-Garra_Naranja.webp",
      idDeDondeViene : 1,
      ratio: 10
    },{
      id : 10,
      nombre: "Cuero c.Barroth",
      image: "../../assets/img/items/Icono-Parte_Naranja.webp",
      idDeDondeViene : 1,
      ratio: 20
    },{
      id : 11,
      nombre: "Escama de Bazelgeuse",
      image: "../../assets/img/items/Icono-Escama_Blanco.webp",
      idDeDondeViene : 2,
      ratio: 50
    },{
      id : 12,
      nombre: "Coraza de Bazelgeuse",
      image: "../../assets/img/items/Icono-Concha_Blanco.webp",
      idDeDondeViene : 2,
      ratio: 40
    },{
      id : 13,
      nombre: "Garra de Bazelgeuse",
      image: "../../assets/img/items/Icono-Garra_Blanco.webp",
      idDeDondeViene : 2,
      ratio: 30
    },{
      id : 14,
      nombre: "Ala de Bazelgeuse",
      image: "../../assets/img/items/Icono-Ala_Blanco.webp",
      idDeDondeViene : 2,
      ratio: 30
    },{
      id : 15,
      nombre: "Gema de Bazelgeuse",
      image: "../../assets/img/items/Icono-Gema_Blanco.webp",
      idDeDondeViene : 2,
      ratio: 10
    },{
      id : 16,
      nombre: "Deviljho Hide",
      image: "../../assets/img/items/deviljho_hide.png",
      idDeDondeViene : 3,
      ratio: 40
    },{
      id : 17,
      nombre: "Deviljho Scale",
      image: "../../assets/img/items/deviljho_scale.png",
      idDeDondeViene : 3,
      ratio: 40
    },{
      id : 18,
      nombre: "Deviljho Scalp",
      image: "../../assets/img/items/deviljho_scalp.jpg",
      idDeDondeViene : 3,
      ratio: 20
    },{
      id : 19,
      nombre: "Deviljho Talon",
      image: "../../assets/img/items/deviljho_talon.png",
      idDeDondeViene : 3,
      ratio: 30
    },{
      id : 20,
      nombre: "Gema Deviljho",
      image: "../../assets/img/items/deviljho_gem.png",
      idDeDondeViene : 3,
      ratio: 10
    },{
      id : 21,
      nombre: "Caparazón Diablos",
      image: "../../assets/img/items/Icono-Concha_Ocre.webp",
      idDeDondeViene : 4,
      ratio: 50
    },{
      id : 22,
      nombre: "Cresta Diablos",
      image: "../../assets/img/items/Icono-Parte_Ocre.webp",
      idDeDondeViene : 4,
      ratio: 40
    },{
      id : 23,
      nombre: "Colmillo Diablos",
      image: "../../assets/img/items/Icono-Garra_Ocre.webp",
      idDeDondeViene : 4,
      ratio: 30
    },{
      id : 24,
      nombre: "Tuétano Diablos",
      image: "../../assets/img/items/Icono-Parte_Rojo.webp",
      idDeDondeViene : 4,
      ratio: 30
    },{
      id : 25,
      nombre: "Cuerno retorcido",
      image: "../../assets/img/items/Icono-Garra_Ocre.webp",
      idDeDondeViene : 4,
      ratio: 40
    },{
      id : 26,
      nombre: "Extracto de Poder",
      image: "../../assets/img/items/Icono-Bebida_Amarillo.webp",
      idDeDondeViene : 4,
      ratio: 20
    },{
      id : 27,
      nombre: "Escama Dodogama",
      image: "../../assets/img/items/Icono-Escama_Azul.webp",
      idDeDondeViene : 5,
      ratio: 50
    },{
      id : 28,
      nombre: "Piel Dodogama",
      image: "../../assets/img/items/Icono-Piel_Azul.webp",
      idDeDondeViene : 5,
      ratio: 40
    },{
      id : 29,
      nombre: "Garra Dodogama",
      image: "../../assets/img/items/Icono-Garra_Azul.webp",
      idDeDondeViene : 5,
      ratio: 40
    },{
      id : 30,
      nombre: "Mandibula Dodogama",
      image: "../../assets/img/items/Icono-Craneo_Azul.webp",
      idDeDondeViene : 5,
      ratio: 30
    },{
      id : 31,
      nombre: "Extracto nutritivo",
      image: "../../assets/img/items/Icono-Bebida_Amarillo.webp",
      idDeDondeViene : 5,
      ratio: 30
    },{
      id : 32,
      nombre: "Escama Gran Girros",
      image: "../../assets/img/items/Icono-Escama_Gris.webp",
      idDeDondeViene : 6,
      ratio: 50
    },{
      id : 33,
      nombre: "Piel Gran Girros",
      image: "../../assets/img/items/Icono-Piel_Gris.webp",
      idDeDondeViene : 6,
      ratio: 40
    },{
      id : 34,
      nombre: "Colmillo Gran Girros",
      image: "../../assets/img/items/Icono-Garra_Gris.webp",
      idDeDondeViene : 6,
      ratio: 30
    },{
      id : 35,
      nombre: "Capucha Gran Girros",
      image: "../../assets/img/items/Icono-Parte_Gris.webp",
      idDeDondeViene : 6,
      ratio: 30
    },{
      id : 36,
      nombre: "Vesicula Paralizante",
      image: "../../assets/img/items/Icono-Bolsa_Amarillo.webp",
      idDeDondeViene : 6,
      ratio: 30
    },{
      id : 37,
      nombre: "Hueso monstruo grande",
      image: "../../assets/img/items/Icono-Hueso_Amarillo.webp",
      idDeDondeViene : 6,
      ratio: 30
    },{
      id : 38,
      nombre: "Escama Gran Jagras",
      image: "../../assets/img/items/Icono-Escama_Amarillo.webp",
      idDeDondeViene : 7,
      ratio: 50
    },{
      id : 39,
      nombre: "Piel Gran Jagras",
      image: "../../assets/img/items/Icono-Piel_Amarillo.webp",
      idDeDondeViene : 7,
      ratio: 40
    },{
      id : 40,
      nombre: "Lágrima wyrem",
      image: "../../assets/img/items/Icono-Parte_Azul.webp",
      idDeDondeViene : 7,
      ratio: 10
    },{
      id : 41,
      nombre: "Garra Gran Jagras",
      image: "../../assets/img/items/Icono-Garra_Amarillo.webp",
      idDeDondeViene : 7,
      ratio: 40
    },{
      id : 42,
      nombre: "Melena Gran Jagras",
      image: "../../assets/img/items/Icono-Parte_Amarillo.webp",
      idDeDondeViene : 7,
      ratio: 30
    },{
      id : 43,
      nombre: "Hueso monstruo pequeño",
      image: "../../assets/img/items/Icono-Hueso_Amarillo.webp",
      idDeDondeViene : 7,
      ratio: 30
    },{
      id : 44,
      nombre: "Escama Jyuratodus",
      image: "../../assets/img/items/Icono-Escama_Beige.webp",
      idDeDondeViene : 8,
      ratio: 50
    },{
      id : 45,
      nombre: "Caparazón Jyuratodus",
      image: "../../assets/img/items/Icono-Concha_Beige.webp",
      idDeDondeViene : 8,
      ratio: 40
    },{
      id : 46,
      nombre: "Aleta Jyuratodus",
      image: "../../assets/img/items/Icono-Parte_Beige.webp",
      idDeDondeViene : 8,
      ratio: 40
    },{
      id : 47,
      nombre: "Comillo Jyuratodus",
      image: "../../assets/img/items/Icono-Garra_Beige.webp",
      idDeDondeViene : 8,
      ratio: 30
    },{
      id : 48,
      nombre: "Vesicula Acuosa",
      image: "../../assets/img/items/Icono-Bolsa_Celeste.webp",
      idDeDondeViene : 8,
      ratio: 30
    },{
      id : 49,
      nombre: "Hueso monstruo mediano",
      image: "../../assets/img/items/Icono-Hueso_Amarillo.webp",
      idDeDondeViene : 8,
      ratio: 30
    },{
      id : 50,
      nombre: "Escama Kulu-Ya-Ku",
      image: "../../assets/img/items/Icono-Escama_Beige.webp",
      idDeDondeViene :9,
      ratio: 50
    },{
      id : 51,
      nombre: "Piel Kulu-Ya-Ku",
      image: "../../assets/img/items/Icono-Piel_Beige.webp",
      idDeDondeViene : 9,
      ratio: 40
    },{
      id : 52,
      nombre: "Pluma Kulu-Ya-Ku",
      image: "../../assets/img/items/Icono-Parte_Naranja.webp",
      idDeDondeViene : 9,
      ratio: 30
    },{
      id : 53,
      nombre: "Pico Kulu-Ya-Ku",
      image: "../../assets/img/items/Icono-Craneo_Beige.webp",
      idDeDondeViene : 9,
      ratio: 40
    },{
      id : 54,
      nombre: "Hueso monstruo pequeño",
      image: "../../assets/img/items/Icono-Hueso_Amarillo.webp",
      idDeDondeViene : 9,
      ratio: 30
    },{
      id : 55,
      nombre: "Escama Legiana",
      image: "../../assets/img/items/Icono-Escama_Azul.webp",
      idDeDondeViene : 10,
      ratio: 50
    },{
      id : 56,
      nombre: "Piel Legiana",
      image: "../../assets/img/items/Icono-Piel_Azul.webp",
      idDeDondeViene : 10,
      ratio: 40
    },{
      id : 57,
      nombre: "Garra Legiana",
      image: "../../assets/img/items/Icono-Garra_Azul.webp",
      idDeDondeViene : 10,
      ratio:40
    },{
      id : 58,
      nombre: "Membrana Legiana",
      image: "../../assets/img/items/Icono-Ala_Azul.webp",
      idDeDondeViene : 10,
      ratio:30
    },{
      id : 59,
      nombre: "Placa Legiana",
      image: "../../assets/img/items/Icono-Placa_Azul.webp",
      idDeDondeViene : 10,
      ratio: 10
    },{
      id : 60,
      nombre: "Vesicula nieve",
      image: "../../assets/img/items/Icono-Bolsa_Blanco.webp",
      idDeDondeViene : 10,
      ratio: 30
    },{
      id : 61,
      nombre: "Escama Odogaron",
      image: "../../assets/img/items/Icono-Escama_Granate.webp",
      idDeDondeViene : 11,
      ratio: 50
    },{
      id : 62,
      nombre: "Tendón Odogaron",
      image: "../../assets/img/items/Icono-Parte_Granate.webp",
      idDeDondeViene : 11,
      ratio: 40
    },{
      id : 63,
      nombre: "Garra Odogaron",
      image: "../../assets/img/items/Icono-Garra_Granate.webp",
      idDeDondeViene : 11,
      ratio: 40
    },{
      id : 64,
      nombre: "Colmillo Odogaron",
      image: "../../assets/img/items/Icono-Garra_Granate.webp",
      idDeDondeViene : 11,
      ratio: 30
    },{
      id : 65,
      nombre: "Placa Odogaron",
      image: "../../assets/img/items/Icono-Placa_Granate.webp",
      idDeDondeViene : 11,
      ratio: 1
    },{
      id : 66,
      nombre: "Extracto nutritivo",
      image: "../../assets/img/items/Icono-Bebida_Amarillo.webp",
      idDeDondeViene : 11,
      ratio: 30
    },{
      id : 67,
      nombre: "Escama Paolumu",
      image: "../../assets/img/items/Icono-Escama_Blanco.webp",
      idDeDondeViene : 12,
      ratio: 50
    },{
      id : 68,
      nombre: "Piel Paolumu",
      image: "../../assets/img/items/Icono-Piel_Blanco.webp",
      idDeDondeViene : 12,
      ratio: 40
    },{
      id : 69,
      nombre: "Caparazón Paolomu",
      image: "../../assets/img/items/Icono-Concha_Rosa.webp",
      idDeDondeViene : 12,
      ratio: 30
    },{
      id : 70,
      nombre: "Membrana Paolomu",
      image: "../../assets/img/items/Icono-Ala_Blanco.webp",
      idDeDondeViene : 12,
      ratio: 40
    },{
      id : 71,
      nombre: "Extracto nutritivo",
      image: "../../assets/img/items/Icono-Bebida_Amarillo.webp",
      idDeDondeViene : 12,
      ratio: 30
    },{
      id : 72,
      nombre: "Escama Pukei-Pukei",
      image: "../../assets/img/items/Icono-Escama_Lima.webp",
      idDeDondeViene : 13,
      ratio: 50
    },{
      id : 73,
      nombre: "Caparazón Pukei-Pukei",
      image: "../../assets/img/items/Icono-Concha_Lima.webp",
      idDeDondeViene : 13,
      ratio: 40
    },{
      id : 74,
      nombre: "Péndola Pukei-Pukei",
      image: "../../assets/img/items/Icono-Ala_Verde.webp",
      idDeDondeViene : 13,
      ratio: 30
    },{
      id : 75,
      nombre: "Bolsa Pukei-Pukei",
      image: "../../assets/img/items/Icono-Bolsa_Lima.webp",
      idDeDondeViene : 13,
      ratio: 30
    },{
      id : 76,
      nombre: "Vesicula Venenosa",
      image: "../../assets/img/items/Icono-Bolsa_Morado.webp",
      idDeDondeViene : 13,
      ratio: 30
    },{
      id : 77,
      nombre: "Escama Radobaan",
      image: "../../assets/img/items/Icono-Escama_Blanco.webp",
      idDeDondeViene : 14,
      ratio: 50
    },{
      id : 78,
      nombre: "Caparazón Radobaan",
      image: "../../assets/img/items/Icono-Concha_Blanco.webp",
      idDeDondeViene : 14,
      ratio: 40
    },{
      id : 79,
      nombre: "Aceite Radobaan",
      image: "../../assets/img/items/Icono-Parte_Blanco.webp",
      idDeDondeViene : 14,
      ratio: 30
    },{
      id : 80,
      nombre: "Tuétano Radobaan",
      image: "../../assets/img/items/Icono-Parte_Blanco.webp",
      idDeDondeViene : 14,
      ratio: 30
    },{
      id : 81,
      nombre: "Vesícula somnífera",
      image: "../../assets/img/items/Icono-Bolsa_Azul.webp",
      idDeDondeViene : 14,
      ratio: 30
    },{
      id : 82,
      nombre: "Escama Rathalos",
      image: "../../assets/img/items/Icono-Escama_Rojo.webp",
      idDeDondeViene : 15,
      ratio: 50
    },{
      id : 83,
      nombre: "Caparazón Rathalos",
      image: "../../assets/img/items/Icono-Concha_Rojo.webp",
      idDeDondeViene : 15,
      ratio: 40
    },{
      id : 84,
      nombre: "Tuétano Rathalos",
      image: "../../assets/img/items/Icono-Parte_Rojo.webp",
      idDeDondeViene : 15,
      ratio: 30
    },{
      id : 85,
      nombre: "Membrana Rathalos",
      image: "../../assets/img/items/Icono-Ala_Rojo.webp",
      idDeDondeViene : 15,
      ratio: 20
    },{
      id : 86,
      nombre: "Garra Rath",
      image: "../../assets/img/items/Icono-Garra_Rojo.webp",
      idDeDondeViene : 15,
      ratio: 30
    },{
      id : 87,
      nombre: "Placa Rathalos",
      image: "../../assets/img/items/Icono-Placa_Rojo.webp",
      idDeDondeViene : 15,
      ratio: 10
    },{
      id : 88,
      nombre: "Vesícula flamígera",
      image: "../../assets/img/items/Icono-Bolsa_Rojo.webp",
      idDeDondeViene : 15,
      ratio: 30
    },{
      id : 89,
      nombre: "Escama Rathian",
      image: "../../assets/img/items/Icono-Escama_Verde.webp",
      idDeDondeViene : 16,
      ratio: 50
    },{
      id : 90,
      nombre: "Caparazón Rathian",
      image: "../../assets/img/items/Icono-Concha_Verde.webp",
      idDeDondeViene : 16,
      ratio: 40
    },{
      id : 91,
      nombre: "Púa Rathian",
      image: "../../assets/img/items/Icono-Parte_Verde.webp",
      idDeDondeViene : 16,
      ratio: 30
    },{
      id : 92,
      nombre: "Membrana Rathian",
      image: "../../assets/img/items/Icono-Ala_Verde.webp",
      idDeDondeViene : 16,
      ratio: 20
    },{
      id : 93,
      nombre: "Garra Rath",
      image: "../../assets/img/items/Icono-Garra_Rojo.webp",
      idDeDondeViene : 16,
      ratio: 30
    },{
      id : 94,
      nombre: "Placa Rathian",
      image: "../../assets/img/items/Icono-Placa_Verde.webp",
      idDeDondeViene : 16,
      ratio: 10
    },{
      id : 95,
      nombre: "Vesícula flamígera",
      image: "../../assets/img/items/Icono-Bolsa_Rojo.webp",
      idDeDondeViene : 16,
      ratio: 30
    },{
      id : 96,
      nombre: "Escama Tobi-Kadachi",
      image: "../../assets/img/items/Icono-Escama_Celeste.webp",
      idDeDondeViene : 17,
      ratio: 50
    },{
      id : 97,
      nombre: "Piel Tobi-Kadachi",
      image: "../../assets/img/items/Icono-Piel_Celeste.webp",
      idDeDondeViene : 17,
      ratio: 40
    },{
      id : 98,
      nombre: "Electrodo Tobi-Kadachi",
      image: "../../assets/img/items/Icono-Parte_Celeste.webp",
      idDeDondeViene : 17,
      ratio: 30
    },{
      id : 99,
      nombre: "Garra Tobi-Kadachi",
      image: "../../assets/img/items/Icono-Garra_Celeste.webp",
      idDeDondeViene : 17,
      ratio: 30
    },{
      id : 100,
      nombre: "Vesícula eléctrica",
      image: "../../assets/img/items/Icono-Bolsa_Amarillo.webp",
      idDeDondeViene : 17,
      ratio: 30
    },{
      id : 101,
      nombre: "Escama Tzitzi-Ya-Ku",
      image: "../../assets/img/items/Icono-Escama_Azul.webp",
      idDeDondeViene : 18,
      ratio: 50
    },{
      id : 102,
      nombre: "Piel Tzitzi-Ya-Ku",
      image: "../../assets/img/items/Icono-Piel_Azul.webp",
      idDeDondeViene : 18,
      ratio: 40
    },{
      id : 103,
      nombre: "Garra Tzitzi-Ya-Ku",
      image: "../../assets/img/items/Icono-Garra_Azul.webp",
      idDeDondeViene : 18,
      ratio: 30
    },{
      id : 104,
      nombre: "Fotóforo Tzitzi-Ya-Ku",
      image: "../../assets/img/items/Icono-Parte_Azul.webp",
      idDeDondeViene : 18,
      ratio: 40
    },{
      id : 105,
      nombre: "Extracto poder",
      image: "../../assets/img/items/Icono-Bebida_Amarillo.webp",
      idDeDondeViene : 18,
      ratio: 30
    },{
      id : 106,
      nombre: "Escama dragón inmortal",
      image: "../../assets/img/items/Icono-Escama_Gris.webp",
      idDeDondeViene : 19,
      ratio: 50
    },{
      id : 107,
      nombre: "Caraza Nergigante",
      image: "../../assets/img/items/Icono-Concha_Negro.webp",
      idDeDondeViene : 19,
      ratio: 40
    },{
      id : 108,
      nombre: "Garra Nergigante",
      image: "../../assets/img/items/Icono-Garra_Gris.webp",
      idDeDondeViene : 19,
      ratio: 30
    },{
      id : 109,
      nombre: "Placa Nergigante",
      image: "../../assets/img/items/Icono-Parte_Blanco.webp",
      idDeDondeViene : 19,
      ratio: 30
    },{
      id : 110,
      nombre: "Gema Nergigante",
      image: "../../assets/img/items/Icono-Gema_Blanco.webp",
      idDeDondeViene : 19,
      ratio: 10
    },{
      id : 111,
      nombre: "Sangre de dragón anciano",
      image: "../../assets/img/items/Icono-Bebida_Rojo.webp",
      idDeDondeViene : 19,
      ratio: 20
    },{
      id : 112,
      nombre: "Escama Teostra",
      image: "../../assets/img/items/Icono-Escama_Rosa.webp",
      idDeDondeViene : 20,
      ratio: 50
    },{
      id : 113,
      nombre: "Coraza Teostra",
      image: "../../assets/img/items/Icono-Concha_Rosa.webp",
      idDeDondeViene : 20,
      ratio: 40
    },{
      id : 114,
      nombre: "Garra Teostra",
      image: "../../assets/img/items/Icono-Garra_Rosa.webp",
      idDeDondeViene : 20,
      ratio: 30
    },{
      id : 115,
      nombre: "Cuerno Teostra",
      image: "../../assets/img/items/Icono-Garra_Rosa.webp",
      idDeDondeViene : 20,
      ratio: 20
    },{
      id : 116,
      nombre: "Gema Teostra",
      image: "../../assets/img/items/Icono-Gema_Blanco.webp",
      idDeDondeViene : 20,
      ratio: 10
    },{
      id : 117,
      nombre: "Crin Teostra",
      image: "../../assets/img/items/Icono-Parte_Rojo.webp",
      idDeDondeViene : 20,
      ratio: 30
    },{
      id : 118,
      nombre: "Escama fallecida",
      image: "../../assets/img/items/Icono-Escama_Blanco.webp",
      idDeDondeViene : 21,
      ratio: 50
    },{
      id : 119,
      nombre: "Coraza Vaal Hazak",
      image: "../../assets/img/items/Icono-Concha_Blanco.webp",
      idDeDondeViene : 21,
      ratio: 40
    },{
      id : 120,
      nombre: "Garra Vaal Hazak",
      image: "../../assets/img/items/Icono-Garra_Blanco.webp",
      idDeDondeViene : 21,
      ratio: 40
    },{
      id : 121,
      nombre: "Colmillo Vaal Hazak",
      image: "../../assets/img/items/Icono-Garra_Blanco.webp",
      idDeDondeViene : 21,
      ratio: 40
    },{
      id : 122,
      nombre: "Ala Vaal Hazak",
      image: "../../assets/img/items/Icono-Ala_Blanco.webp",
      idDeDondeViene : 21,
      ratio: 30
    },{
      id : 123,
      nombre: "Membrana Vaal Hazak",
      image: "../../assets/img/items/Icono-Parte_Rojo.webp",
      idDeDondeViene : 21,
      ratio: 30
    },{
      id : 124,
      nombre: "Gema Vaal Hazak",
      image: "../../assets/img/items/Icono-Gema_Blanco.webp",
      idDeDondeViene : 21,
      ratio: 10
    },{
      id : 125,
      nombre: "Sangre dragón anciano",
      image: "../../assets/img/items/Icono-Bebida_Rojo.webp",
      idDeDondeViene : 21,
      ratio: 30
    },{
      id : 126,
      nombre: "Escama Xenojiiva",
      image: "../../assets/img/items/Icono-Escama_Blanco.webp",
      idDeDondeViene : 22,
      ratio: 30
    },{
      id : 127,
      nombre: "Caparazón Xenojiiva",
      image: "../../assets/img/items/Icono-Concha_Blanco.webp",
      idDeDondeViene : 22,
      ratio: 40
    },{
      id : 128,
      nombre: "Garra Xenojiiva",
      image: "../../assets/img/items/Icono-Garra_Blanco.webp",
      idDeDondeViene : 22,
      ratio: 30
    },{
      id : 129,
      nombre: "Ala Xenojiiva",
      image: "../../assets/img/items/Icono-Ala_Blanco.webp",
      idDeDondeViene : 22,
      ratio: 30
    },{
      id : 130,
      nombre: "Gema Xenojiiva",
      image: "../../assets/img/items/Icono-Gema_Blanco.webp",
      idDeDondeViene : 22,
      ratio: 10
    }]  

  constructor(private firestore: Firestore) { }

  getItems(){
    return this.items
  }
  getItemsFirebase(): Observable<Item[]> {
    const collectionRef = collection(this.firestore, 'items');
    return collectionData(collectionRef, {idField: 'idFirebase'}) as Observable<Item[]>;
  }

  async addMonster(item: Item) {
    try {
        const docRef = await addDoc(collection(this.firestore, "items"), item);
    } catch (e) {
        console.error("Error adding document: ", e);
    }    
}
}
