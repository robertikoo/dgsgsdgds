import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MisionComponent } from './components/mision/mision.component';
import { VisionComponent } from './components/vision/vision.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';






const APP_ROUTES: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'perfiles', component: ProfileComponent },
    { path: 'perfil/:id', component: PerfilComponent },
    {path: 'mision', component: MisionComponent},
    {path: 'vision', component: VisionComponent},
    {path: 'galeria', component: GaleriaComponent},
    {path: 'eventos', component: EventosComponent },
    {path: 'login', component: LoginComponent, pathMatch: 'full'},
    {path: 'registro', component: RegistroComponent},
    {path: 'ubicacion', component: UbicacionComponent}, 
    { path: 'error', component: NotFoundComponent },
    { path: '', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'error'}
];

export const APP_Routing = RouterModule.forRoot(APP_ROUTES);