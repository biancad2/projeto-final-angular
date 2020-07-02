import { Component, OnInit } from '@angular/core';

import { cursadas } from '../materias-cursadas';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-materias-cursadas-details',
  templateUrl: './materias-cursadas-details.component.html',
  styleUrls: ['./materias-cursadas-details.component.css']
})
export class MateriasCursadasDetailsComponent implements OnInit {
  indexSemester;
  indexSubject;
  cursada;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.indexSemester=params.get('indexSemester');
        this.indexSubject=params.get('indexSubject');
        this.cursada = cursadas[this.indexSemester].subjects[this.indexSubject];
      }
    );
  }

  edit(){
    document.getElementById("input-nota").classList.remove("no-display");
    document.getElementById("btn-salvar").classList.remove("no-display");
    document.getElementById("text-nota").classList.add("no-display");
  }


  save(note: number){
    this.cursada.nf = note;
    document.getElementById("input-nota").classList.add("no-display");
    document.getElementById("btn-salvar").classList.add("no-display");
    document.getElementById("text-nota").classList.remove("no-display");
  }

}
