import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';

@Component({
  selector: 'app-crear-generos',
  templateUrl: './crear-generos.component.html',
  styleUrls: ['./crear-generos.component.css']
})
export class CrearGenerosComponent implements OnInit {


  constructor(private router: Router, private formBuilder: FormBuilder) { }
  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(3), primeraLetraMayuscula()]
      }]
    });
  }

  guardarCambios(){
    // Guardar cambos
    this.router.navigate(['/generos']);
  }

  // tslint:disable-next-line: typedef
  obtenerErrorCampoNombre(){
    let campo =  this.form.get('nombre');
    if (campo.hasError('required')) {
      return 'El campo es requerido';
    }
    if (campo.hasError('minlength')){
      return 'La longitud minima es de 3 caracteres';
    }
    if (campo.hasError('primeraLetraMayuscula')) {
      return campo.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }

}
