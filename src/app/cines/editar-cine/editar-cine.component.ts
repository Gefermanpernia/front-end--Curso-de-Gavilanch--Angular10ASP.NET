import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  modelo: cineDTO = {
    nombre: 'Sambil',
    latitud: 10.497807463168124,
    longitud:  -426.892147064209
  };
  constructor() { }

  ngOnInit(): void {
  }

  guardarCambios(cine: cineCreacionDTO){
    console.log(cine);
  }
}
