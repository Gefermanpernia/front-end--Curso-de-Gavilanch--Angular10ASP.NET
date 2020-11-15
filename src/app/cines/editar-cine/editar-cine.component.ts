import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  modelo: cineDTO = { nombre: 'Sambil'};
  constructor() { }

  ngOnInit(): void {
  }
  guardarCambios(cine: cineCreacionDTO){
    console.log(cine);
  }
}
