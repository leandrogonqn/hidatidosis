import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{ MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import {routing } from './app-routing';
import { EstablecimientoComponent } from './establecimiento/establecimiento.component';
import{ResultadoComponent} from './resultado/resultado.component';
import{AlumnoComponent} from './alumno/alumno.component';
import{ResultadoPositivoComponent} from './resultado-positivo/resultado-positivo.component';
import { EcoConvivientesComponent } from './eco-convivientes/eco-convivientes.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    EstablecimientoComponent
    ,ResultadoComponent
    ,AlumnoComponent
    ,ResultadoPositivoComponent
    , EcoConvivientesComponent, ContainerComponent
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
