import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  constructor(private loginservice:LoginService){
    
  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyAxqDw-7m_QR7QnZdiKjIHtRvHHjwsu1b8",
      authDomain: "mis-clientes-61999.firebaseapp.com",
    });
    
  };

  estaLogueado(){
    return this.loginservice.estaslogueado();
  }

  logout(){
    this.loginservice.logout();
  }

}
