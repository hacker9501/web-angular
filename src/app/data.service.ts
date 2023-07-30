import { HttpClient } from "@angular/common/http";
import { Empleado } from './empleado.model';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient,private loginservice:LoginService) {}

  cargarEmpleado() {

    const token=this.loginservice.getIdToken();

    return this.httpClient.get(
      'https://mis-clientes-61999-default-rtdb.firebaseio.com/datos.json?auth=' + token
    );
  }

  guardarEmpleados(empleados: Empleado[]) {
    this.httpClient
      .put(
        'https://mis-clientes-61999-default-rtdb.firebaseio.com/datos.json',
        empleados
      )
      .subscribe(
        (response) => console.log('Se han guardado los empleado:' + response),
        (error) => console.log('Error: ' + error)
      );
  }

  actualizarEmpleado(indice: number, empleado: Empleado) {
    let url =
      'https://mis-clientes-61999-default-rtdb.firebaseio.com/datos/' +
      indice +
      '.json';
    this.httpClient.put(url, empleado).subscribe(
      (response) =>
        console.log('Se modificado correctamente el empleado:' + response),
      (error) => console.log('Error: ' + error)
    );
  }

  eliminarEmpleado(indice: number) {
    let url =
      'https://mis-clientes-61999-default-rtdb.firebaseio.com/datos/' +
      indice +
      '.json';
    this.httpClient.delete(url).subscribe(
      (response) =>
        console.log('Se eliminado correctamente el empleado:' + response),
      (error) => console.log('Error: ' + error)
    );
  }
}