import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/multipleSelectorModel';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {
  form: FormGroup;

  @Input()
  modelo: PeliculaDTO;
  @Output()
  OnSubmit: EventEmitter<PeliculaCreacionDTO> = new EventEmitter<PeliculaCreacionDTO>();


  generosNoSeleccionados: MultipleSelectorModel[] = [
    {llave: 1, valor: 'drama'},
    {llave: 2, valor: 'Comedia'},
    {llave: 3, valor: 'Accion'},

  ];
  generosSeleccionados: MultipleSelectorModel[] = [];

  cinesNoSeleccionados: MultipleSelectorModel[] = [
    { llave: 1, valor: 'Sambil'},
    { llave: 2, valor: 'Recreo'},
    { llave: 3, valor: 'CCCT'},
  ];
  cinesSeleccionados: MultipleSelectorModel[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: [
        '',
        {
          validators: [Validators.required]
        },
      ],
      resumen: '',
      enCine: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: '',
      generosId: '',
      cinesId: '',
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }


  changeMarkdown(text: string){
    this.form.get('resumen').setValue(text);
  }
  archivoSeleccionado(file: File){
    this.form.get('poster').setValue(file);
  }

  guardarCambios(){

    // Generos
    const generosIds = this.generosSeleccionados.map(valor => valor.llave);
    this.form.get('generosId').setValue(generosIds);

    // Cines
    const cinesIds = this.cinesSeleccionados.map(valor => valor.llave);
    this.form.get('cinesId').setValue(cinesIds);


    this.OnSubmit.emit(this.form.value);

  }
}
