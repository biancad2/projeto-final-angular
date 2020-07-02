import { Injectable } from '@angular/core';
import { cursadas } from '../materias-cursadas';
@Injectable({
  providedIn: 'root'
})
export class CursadasService {
  cursadas = cursadas;
  public counter; 

  constructor() { }

  materias(){
    this.counter=0;
    for(var i=0; i < cursadas.length; i++){
      for(var j=0; j<=cursadas[i].subjects.length; j++){
        this.counter++;
      }
    }
  }

  getCount(){
    return this.counter;
  }
}
