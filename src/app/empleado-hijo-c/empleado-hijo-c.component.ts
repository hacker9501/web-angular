import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css'],
})
export class EmpleadoHijoCComponent {
  @Input() empleadodeLista: Empleado;
  @Input() indice: number;

  arrayCaracteristicas = [""];

  agregarCaracteristica(nuevacaracteristica: string) {
    this.arrayCaracteristicas.push(nuevacaracteristica);
  }
}
