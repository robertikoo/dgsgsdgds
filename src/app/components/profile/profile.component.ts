import { Component, OnInit } from '@angular/core';
import { PerfilesService, Perfil } from '../../services/perfiles.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  perfiles: Perfil[] = [];

  constructor( 
    private _perfilesService: PerfilesService,
    private router: Router
    ) { 
      
  }

  ngOnInit() {
    this.perfiles = this._perfilesService.getPerfiles();
  }

  verPerfil(idx: number){
  this.router.navigate( ['/perfil', idx] );

  
  
  }

}
