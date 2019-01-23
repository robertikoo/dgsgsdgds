import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfilesService } from '../../services/perfiles.service';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent  {

  perfil: any = {};
  

  constructor( 
    activatedRoute: ActivatedRoute,
    private _perfilServeice: PerfilesService
     ) {
       activatedRoute.params.subscribe( params => {
      this.perfil = this._perfilServeice.getPerfil( params['id'] );
    })
   }
  

}
