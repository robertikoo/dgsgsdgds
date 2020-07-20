import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {
  name: string = 'My first AGM project';
  lat: number = -33.537805;
  lng: number = -70.636836;
  zoom: number = 15;

  ngOnInit (){

  }



    

}