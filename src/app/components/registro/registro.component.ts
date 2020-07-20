import { Component, OnInit } from '@angular/core';
import { PerfilComponent } from '../perfil/perfil.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public credentials = {
    nombre : '',
    apellido : '',
    edad : 0,
    email : '',
    password : ''
  };
  constructor() { }

  ngOnInit() {
  }

  registro() {
    console.log('Lo que se valla hacer al registrar');
    console.log( this.credentials );
  }
}
