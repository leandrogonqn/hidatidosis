import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './padre.component.html',
  
})
export class PadreComponent {

nombrePadre:String;
  verNombre(nombre:String){

    alert('My name is: '+ nombre);
    this.nombrePadre = nombre;
  }
}
