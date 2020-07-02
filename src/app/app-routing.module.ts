import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MateriasCursadasComponent } from './materias-cursadas/materias-cursadas.component';
import { MateriasCursandoComponent } from './materias-cursando/materias-cursando.component';
import { IndexComponent } from './index/index.component';
import { MateriasCursadasDetailsComponent } from './materias-cursadas-details/materias-cursadas-details.component';
import { MateriasCursandoDetailsComponent } from './materias-cursando-details/materias-cursando-details.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'cursadas', component: MateriasCursadasComponent},
  {path: 'cursadas/:indexSemester/:indexSubject', component: MateriasCursadasDetailsComponent},
  {path: 'cursando', component: MateriasCursandoComponent},
  {path: 'cursando/:index', component: MateriasCursandoDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
