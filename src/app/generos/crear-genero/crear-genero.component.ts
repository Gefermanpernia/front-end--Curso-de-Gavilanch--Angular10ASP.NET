import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent {

  constructor(private router: Router,
    private generoService: GenerosService ) { }

    guardarCambios(genero: generoCreacionDTO){
    // ... guardar los cambios
    this.generoService.crear(genero).subscribe(() => {
      this.router.navigate(['/generos']);
    }, err => console.error(err));
  }

}