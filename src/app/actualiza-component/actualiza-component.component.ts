import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css'],
})
export class ActualizaComponentComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private miServicio: ServicioEmpleadosService,
    private empleadosService: EmpleadosService
  ) {}

  volverHome() {
    this.router.navigate(['']);
  }
  accion: number;
  ngOnInit(): void {
    this.accion=parseInt(this.route.snapshot.queryParams['accion']);
    this.empleados = this.empleadosService.empleados;
    this.indice = this.route.snapshot.params['id'];
    let empleado: Empleado = this.empleadosService.encontrarEmpleado(
      this.indice
    );

    this.cuadradonombre = empleado.nombre;
    this.cuadradoapellido = empleado.apellido;
    this.cuadradocargo = empleado.cargo;
    this.cuadradosalario = empleado.salario;
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

  indice: number;

  // actualizaEmpleado() {
  //   let miEmpleado = new Empleado(
  //     this.cuadradonombre,
  //     this.cuadradoapellido,
  //     this.cuadradocargo,
  //     this.cuadradosalario
  //   );
  //   //this.miServicio.muestraMensaje("Nombre del empleado:" + miEmpleado.nombre);
  //   this.empleadosService.actualizaEmpleado(this.indice, miEmpleado);
  //   this.router.navigate(['']);
  //   // this.empleados.push(miEmpleado);
  // }

  // eliminaEmpleado(){
  //   this.empleadosService.eliminaEmpleado(this.indice);
  //   this.router.navigate(['']);
  // }

  actualizaEmpleado() {
    if(this.accion===1){
      let miEmpleado = new Empleado(this.cuadradonombre,this.cuadradoapellido,this.cuadradocargo,this.cuadradosalario);
      //this.miServicio.muestraMensaje('Nombre del empleado:' + miEmpleado.nombre);
      this.empleadosService.actualizaEmpleado(this.indice, miEmpleado);
      this.router.navigate(['']);
    }else{

    this.empleadosService.eliminaEmpleado(this.indice);
    this.router.navigate(['']);
    }
  }
}
