import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{ MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import {routing } from './app-routing';
import {JugadoresComponent} from './jugadores/jugadores.component';
import {EquiposComponent } from './Equipos/equipos.component';
import { ArbitrosComponent } from './arbitros/arbitros.component';
import { EstablecimientoComponent } from './establecimiento/establecimiento.component';
import{ResultadoComponent} from './resultado/resultado.component';
import {PadreComponent} from './padre-hijo/padre.component';
import {HijoComponent} from './padre-hijo/hijo.component';
import{AlumnoComponent} from './alumno/alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadoresComponent,
    EquiposComponent,
    ArbitrosComponent,
    EstablecimientoComponent
    ,PadreComponent
    ,HijoComponent
    ,ResultadoComponent
    ,AlumnoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    routing
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
