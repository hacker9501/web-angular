import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent {
  title = 'Listado de todos los Empleados';

  constructor(
    private miServicio: ServicioEmpleadosService,
    private empleadosService: EmpleadosService
  ) {
    //this.empleados=this.empleadosService.empleados;
  }
  ngOnInit(): void {

    this.empleadosService.obtenerEmpleados().subscribe(misEmpleados=>{
      console.log(misEmpleados);

      this.empleados=Object.values(misEmpleados);

      this.empleadosService.setEmpleados(this.empleados);

    });

    //this.empleados = this.empleadosService.empleados;
  }

  empleados: Empleado[] = [];
  // empleados: Empleado[] = [
  //   new Empleado('Elver', 'Mayta', 'Desarrollador', 3500),
  //   new Empleado('Mauro', 'Zegarra', 'Desarrollador', 4500),
  //   new Empleado('Roy', 'Cerdan', 'Desarrollador', 5500),
  //   new Empleado('Jose', 'Chipana', 'Desarrollador', 7500),
  // ];

  cuadradonombre: string = '';
  cuadradoapellido: string = '';
  cuadradocargo: string = '';
  cuadradosalario: number = 0;

  agregarEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadradonombre,
      this.cuadradoapellido,
      this.cuadradocargo,
      this.cuadradosalario
    );
    //this.miServicio.muestraMensaje("Nombre del empleado:" + miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoservice(miEmpleado);
    // this.empleados.push(miEmpleado);
  }
}
