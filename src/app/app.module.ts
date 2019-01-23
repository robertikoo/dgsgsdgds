import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';




import { APP_Routing } from './app-routing.module';



//servicios
import { PerfilesService } from './services/perfiles.service';


//compmonentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CuadrosComponent } from './components/cuadros/cuadros.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MisionComponent } from './components/mision/mision.component';
import { VisionComponent } from './components/vision/vision.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    PerfilComponent,
    CuadrosComponent,
    NotFoundComponent,
    MisionComponent,
    VisionComponent,
    GaleriaComponent,
    EventosComponent,
    UbicacionComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    APP_Routing,
    NgbModule,
    HttpClientModule


  ],
  providers: [
    PerfilesService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
