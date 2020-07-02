import { Component, OnInit } from '@angular/core';
import { cursadas } from '../materias-cursadas';

@Component({
  selector: 'app-materias-cursadas',
  templateUrl: './materias-cursadas.component.html',
  styleUrls: ['./materias-cursadas.component.css']
})
export class MateriasCursadasComponent implements OnInit {

  cursadas = cursadas;
  
  constructor() { }

  ngOnInit(): void {
  }

}
