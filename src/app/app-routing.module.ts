import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';

import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';

import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';

import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';
import { IndiceGenersComponent } from './generos/indice-geners/indice-geners.component';
import { EditarGenerosComponent } from './generos/editar-generos/editar-generos.component';

import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarPeliculaComponent } from './pelicula/editar-pelicula/editar-pelicula.component';




const routes: Routes = [
 { path: '', component: LandingPageComponent},

 { path: 'generos', component: IndiceGenersComponent},
 { path: 'generos/crear', component: CrearGenerosComponent},
 { path: 'generos/editar/:id', component: EditarGenerosComponent},

 { path: 'actores', component: IndiceActoresComponent},
 { path: 'actores/crear', component: CrearActorComponent},
 { path: 'actores/editar/:id', component: EditarActorComponent},

 { path: 'cines', component: IndiceCinesComponent},
 { path: 'cines/crear', component: CrearCineComponent},
 { path: 'cines/editar/:id', component: EditarCineComponent},

 { path: 'peliculas/crear', component: CrearPeliculaComponent},
 { path: 'peliculas/editar/:id', component: EditarPeliculaComponent},


 
 { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
