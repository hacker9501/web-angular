import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleados-c',
  templateUrl: './caracteristicas-empleados-c.component.html',
  styleUrls: ['./caracteristicas-empleados-c.component.css'],
})

export class CaracteristicasEmpleadosCComponent {

  //constructor(private miServicio:ServicioEmpleadosService){}

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  agregarCaracteristica(value: string) {
    //this.miServicio.muestraMensaje(value)
    this.caracteristicasEmpleados.emit(value);
  }
}
