import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadosCComponent } from './caracteristicas-empleados-c/caracteristicas-empleados-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { Routes, RouterModule } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponentComponent } from './error-personalizado-component/error-personalizado-component.component';
import { DataService } from './data.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component'
import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { Loginguardian } from './login/login-guardin';

const appRoutes: Routes = [
  { path: '', component: HomeComponentComponent, canActivate: [Loginguardian] },
  {
    path: 'proyectos',
    component: ProyectosComponentComponent,
    canActivate: [Loginguardian],
  },
  {
    path: 'quienes',
    component: QuienesComponentComponent,
    canActivate: [Loginguardian],
  },
  {
    path: 'contact',
    component: ContactComponentComponent,
    canActivate: [Loginguardian],
  },
  { path: 'actualiza/:id', component: ActualizaComponentComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorPersonalizadoComponentComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadosCComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    ContactComponentComponent,
    QuienesComponentComponent,
    ActualizaComponentComponent,
    ErrorPersonalizadoComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [ServicioEmpleadosService,EmpleadosService,DataService,LoginService,CookieService,Loginguardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
