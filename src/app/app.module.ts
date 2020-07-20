import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, Injectable } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxGalleryModule } from 'ngx-gallery';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { APP_Routing } from './app-routing.module';



//servicios
import { PerfilesService } from './services/perfiles.service';


//compmonentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CreditosComponent } from './components/creditos/creditos.component';
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
import { AgmCoreModule } from '@agm/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { EventualesComponent } from './components/eventuales/eventuales.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { CoroComponent } from './components/coro/coro.component';
import { JovenesComponent } from './components/jovenes/jovenes.component';
import { PropositoComponent } from './components/proposito/proposito.component';
import { ReunionesComponent } from './components/reuniones/reuniones.component';
import { SomosComponent } from './components/somos/somos.component';
import { HistoriaComponent } from './components/historia/historia.component';


@Injectable()
export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    'pan': {
      direction: Hammer.DIRECTION_ALL,
    }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    PerfilComponent,
    ContactoComponent,
    CreditosComponent,
    CuadrosComponent,
    NotFoundComponent,
    MisionComponent,
    VisionComponent,
    GaleriaComponent,
    EventosComponent,
    UbicacionComponent,
    LoginComponent,
    RegistroComponent,
    EventualesComponent,
    NoticiasComponent,
    CoroComponent,
    JovenesComponent,
    PropositoComponent,
    ReunionesComponent,
    SomosComponent,
    HistoriaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_Routing,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    NgxGalleryModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLeAcRR_uJjx7LON71fy5rUMJe6G6tfO0'

    })
  ],
  providers: [
    PerfilesService,
    {provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig}
  ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]

})
export class AppModule { }
