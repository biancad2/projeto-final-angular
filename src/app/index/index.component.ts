import { Component, OnInit } from '@angular/core';
import { CursandoService } from '../services/cursando.service';
import { CursadasService } from '../services/cursadas.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public cursandoService: CursandoService, public cursadasService: CursadasService) { }

  ngOnInit(): void {
    this.cursandoService.tamanho();
    this.cursadasService.materias();
  }

}
