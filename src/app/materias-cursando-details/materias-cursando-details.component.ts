import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CursandoService } from '../services/cursando.service';
@Component({
  selector: 'app-materias-cursando-details',
  templateUrl: './materias-cursando-details.component.html',
  styleUrls: ['./materias-cursando-details.component.css']
})
export class MateriasCursandoDetailsComponent implements OnInit {
  index;
  cursando;

  constructor(public cursandoService: CursandoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.index=params.get('index');
        this.cursando = this.cursandoService.list[this.index];
      }
    );
  }

  edit(){
    document.getElementById("input-nota").classList.remove("no-display");
    document.getElementById("btn-salvar").classList.remove("no-display");
    document.getElementById("text-nota").classList.add("no-display");
  }


  save(note: number){
    this.cursando.nf = note;
    document.getElementById("input-nota").classList.add("no-display");
    document.getElementById("btn-salvar").classList.add("no-display");
    document.getElementById("text-nota").classList.remove("no-display");
  }

}
