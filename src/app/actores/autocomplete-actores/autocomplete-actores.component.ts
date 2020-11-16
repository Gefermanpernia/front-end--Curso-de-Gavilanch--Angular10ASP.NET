import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {

  control: FormControl = new FormControl();
  actores = [
    {nombre: 'tom holland', personaje: '' , foto: 'https://m.media-amazon.com/images/M/MV5BNTAzMzA3NjQwOF5BMl5BanBnXkFtZTgwMDUzODQ5MTI@._V1_UY317_CR23,0,214,317_AL_.jpg'},
    {nombre: 'Robert Downey Jr', personaje: '' , foto: 'https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UX214_CR0,0,214,317_AL_.jpg'},
    {nombre: 'Chris Evans', personaje: '' , foto: 'https://m.media-amazon.com/images/M/MV5BMTU2NTg1OTQzMF5BMl5BanBnXkFtZTcwNjIyMjkyMg@@._V1_UY317_CR6,0,214,317_AL_.jpg'},
  ];

  actoresOriginal = this.actores;
  actoresSeleccionados = [];

  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

  // tomamos una referencia de la tabla
  @ViewChild(MatTable) table: MatTable<any>;


  constructor() { }

  ngOnInit(): void {
    this.control.valueChanges.subscribe((valor: string) => {
      this.actores = this.actoresOriginal;
      this.actores = this.actores.filter(actor => actor.nombre.toLowerCase().indexOf(valor.toLowerCase()) !== -1);
    });
  }
  optionSelected(event: MatAutocompleteSelectedEvent): void{
    console.log(event.option.value);
    if ( this.actoresSeleccionados.find(a => a === event.option.value)){
      this.control.patchValue('');
      return;
    }
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');
    if (this.table !== undefined){
      this.table.renderRows();
    }
  }
  eliminar(actor: any): void{
    const indice = this.actoresSeleccionados.findIndex(a => a.nombre === actor.nombre);
    this.actoresSeleccionados.splice(indice, 1);
    this.table.renderRows();
  }

  finalizaArrastre(event: CdkDragDrop<any[]>): void{
    const indicePrevio = this.actoresSeleccionados.findIndex(
      actor => actor === event.item.data
    );
    moveItemInArray(this.actoresSeleccionados, indicePrevio, event.currentIndex);
    this.table.renderRows();
  }
}
