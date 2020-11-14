import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';
import { IndiceGenersComponent } from './generos/indice-geners/indice-geners.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
 { path: '', component: LandingPageComponent},
 { path: 'generos', component: IndiceGenersComponent},
 { path: 'generos', component: IndiceGenersComponent},
 { path: 'generos/crear', component: CrearGenerosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
