import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {

  private perfiles: Perfil[] = [
    {
      id:1,
      nombre: "",
      apellido:"",
      edad:0,
      email:"",
      password:"",
      img: "assets/img/avatar.png",
      tipoPerfil
     }
 

    ];

  constructor(private http: HttpClient){

  }
  LoadProfiles( ) {
    try {
      const options = {
          method: 'get',
          withCredentials: true
        };

      //  Haces la peticion al script de php...
      this.http.get('localhost/load-profiles.php', options)
        .subscribe(
          //  En caso de que todo salga bien
          (r: any) => {
            this.perfiles = r; //  En caso de que devuelvas un array de objetos json
          },

          //  Sino...
          () => console.log('Error'));

    } catch (x) {
      console.log('No se pudo completar la solicitud: ' + x);
    }
  }
  SaveProfile( perfil: Perfil ) {
    try {
      const options = {
          method: 'get',
          withCredentials: true
        };

      //  Haces la peticion al script de php...
      this.http.get('localhost/save-profile.php?data=' + JSON.stringify(perfil), options)
        .subscribe(
          //  En caso de que todo salga bien
          (r: any) => {
            console.log(r);
          },

          //  Sino...
          () => console.log('Error'));

    } catch (x) {
      console.log('No se pudo completar la solicitud: ' + x);
    }
  }

  getPerfiles(){
    return this.perfiles;
  }
  getPerfil( idx: string ){
  return this.perfiles[idx];

  }

  buscarPerfiles( termino: string ) {

    let perfilesArr: Perfil[] = [];
    termino = termino.toLowerCase();

    for ( let i = 0; i < this.perfiles.length; i++ ){

      let perfil = this.perfiles[i];
      let nombre = perfil.nombre.toLowerCase();
      if( nombre.indexOf( termino ) >= 0 ){
    } perfil.idx = i;
       perfilesArr.push( perfil )
     }

      return perfilesArr;
  }
}

export interface Perfil{
id: number;
nombre: string;
apellido:string;
password: string;
edad: number;
email: string;
img: string;
tipoPerfil: string;
idx?: number;
};