import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cuadros',
  templateUrl: './cuadros.component.html',
  styleUrls: ['./cuadros.component.css']
})
export class CuadrosComponent implements OnInit {
 
  @Input() perfil: any = {};
  @Input() index: number;
  @Input() mision: any = {}
  @Input() vision: any = {}
  @Input() galeria: any = {}
  @Input() eventos: any = {}
  @Input() login: any = {}
  @Input() registro: any = {}
  @Input() contacto: any = {}
  @Input() ubicacion: any = {}
  @Input() creditos: any = {}

  @Output() Seleccionado: EventEmitter<number>;

  constructor( private router: Router ) {
    this.Seleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verPerfil(){

    this.router.navigate( ['/perfil', this.index] );
    

  }
  
   verMision(){
     this.router.navigate(['/mision', this.index]);
   }

     
   verVision(){
    this.router.navigate(['/vision', this.index]);
  }

    
  verGaleria(){
    this.router.navigate(['/galeria', this.index]);
  }

    
  verEventos(){
    this.router.navigate(['/eventos', this.index]);
  }
  verLogin(){
    this.router.navigate(['/login', this.index]);
  }

  verRegistro(){
    this.router.navigate(['/registro', this.index]);
  }

  verContacto(){
    this.router.navigate(['/contacto', this.index]);
  }


  verUbicacion(){
    this.router.navigate(['/ubicacion', this.index]);
  }
  verCreditos(){
    this.router.navigate(['/creditos', this.index]);
  }
}
