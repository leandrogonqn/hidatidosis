import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContainerComponent} from './container/container.component';




export const routes: Routes = [

      { path: 'container', component: ContainerComponent }

     
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
