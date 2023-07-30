import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css'],
})
export class ProyectosComponentComponent {
  constructor(
    private router: Router,
    private miServicio: ServicioEmpleadosService,
    private empleadosService: EmpleadosService
  ) {}

  volverHome() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
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
    this.router.navigate(['']);
    // this.empleados.push(miEmpleado);
  }
}
