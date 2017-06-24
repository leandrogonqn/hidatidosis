import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { EquiposComponent } from './Equipos/equipos.component';
import {ArbitrosComponent} from './arbitros/arbitros.component';
import {EstablecimientoComponent} from './establecimiento/establecimiento.component';

import{PadreComponent} from './padre-hijo/padre.component';


export const routes: Routes = [
    { path: 'jugadores', component: JugadoresComponent },
      { path: 'equipos', component: EquiposComponent },
      { path: 'arbitros', component: ArbitrosComponent },
      { path: 'establecimiento', component: EstablecimientoComponent }
     ,{ path: 'padre', component: PadreComponent }
     
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
