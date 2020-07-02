import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MateriasCursadasComponent } from './materias-cursadas/materias-cursadas.component';
import { MateriasCursandoComponent } from './materias-cursando/materias-cursando.component';
import { IndexComponent } from './index/index.component';
import { MateriasCursadasDetailsComponent } from './materias-cursadas-details/materias-cursadas-details.component';
import { MateriasCursandoDetailsComponent } from './materias-cursando-details/materias-cursando-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MateriasCursadasComponent,
    MateriasCursandoComponent,
    IndexComponent,
    MateriasCursadasDetailsComponent,
    MateriasCursandoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
