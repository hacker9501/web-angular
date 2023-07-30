import { Empleado } from './empleado.model';
import { Injectable } from '@angular/core';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataService } from './data.service';

@Injectable()
export class EmpleadosService {
  constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService: DataService) {}

  setEmpleados(misEmpleados:Empleado[]){
    this.empleados=misEmpleados;
  }

  obtenerEmpleados(){
    return this.dataService.cargarEmpleado();
  }

  empleados: Empleado[] = []
  // empleados: Empleado[] = [
  //   new Empleado('Elver', 'Mayta', 'Desarrollador', 3500),
  //   new Empleado('Mauro', 'Zegarra', 'Desarrollador', 4500),
  //   new Empleado('Roy', 'Cerdan', 'Desarrollador', 5500),
  //   new Empleado('Jose', 'Chipana', 'Desarrollador', 7500),
  // ];




  agregarEmpleadoservice(empleado: Empleado) {
    this.servicioVentanaEmergente.muestraMensaje(
      'Persona que se va agregar: ' +
        '\n' +
        empleado.nombre +
        '\n' +
        'Salario:' +
        empleado.salario
    );
    this.empleados.push(empleado);
    this.dataService.guardarEmpleados(this.empleados);
  }

  encontrarEmpleado(indice: number) {
    let empleado: Empleado = this.empleados[indice];

    return empleado;
  }

  actualizaEmpleado(indice: number, empleado: Empleado) {
    let empleadoModificado = this.empleados[indice];

    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;

    this.dataService.actualizarEmpleado(indice,empleado);
  }

  eliminaEmpleado(indice:number) {
    this.empleados.splice(indice,1);

    this.dataService.eliminarEmpleado(indice);

    if(this.empleados!=null)this.dataService.guardarEmpleados(this.empleados);
 //no se habre llaves xq tiene solo esa instrucion
  }
}