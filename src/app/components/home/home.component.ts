import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos=[
    {'nombre':'Angular 4| Curso Practico Completo, Desde Cero, Para Principiantes','ruta':'https://www.youtube.com/watch?v=Sx_2dOYOtes&t=219s',
  'texto':' Angular desde Cero, Paso a paso, empezando por instalar el entorno con Node.js, visual studio code, y angular-cli hasta hacer una aplicación de ejemplo con angular y typescript desde cero en el entorno más conocido que es windows.'}
    ];

  constructor() { }

  ngOnInit() {
  }

}
