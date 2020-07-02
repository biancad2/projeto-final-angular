import { Component, OnInit } from '@angular/core';
import { CursandoService } from '../services/cursando.service';

@Component({
  selector: 'app-materias-cursando',
  templateUrl: './materias-cursando.component.html',
  styleUrls: ['./materias-cursando.component.css']
})
export class MateriasCursandoComponent implements OnInit {

  constructor(public cursandoService: CursandoService) { }

  ngOnInit(): void {
  }

}
