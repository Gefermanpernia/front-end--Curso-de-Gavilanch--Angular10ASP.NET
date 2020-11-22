import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { error } from 'protractor';
import { generoDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.css'],
})
export class IndiceGenerosComponent implements OnInit {
  constructor(private generosService: GenerosService) {}

  generos: generoDTO[];
  cantidadTotalRegistro;
  cantidadRegistrosAMostrar = 10;
  paginaActual = 1;
  columnasAMostrar = ['id', 'nombre', 'acciones'];
  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar){
    this.generosService.obtenerTodo(pagina, cantidadElementosAMostrar).subscribe(
      (respuesta: HttpResponse<generoDTO[]>) => {
        this.generos = respuesta.body;
        this.cantidadTotalRegistro = respuesta.headers.get("cantidadTotalRegistros");
      },
      (error) => console.error(error)
    );
  }
  actualizarPaginacion(datos: PageEvent){
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  borrar(id: number){
    this.generosService.borrar(id)
    .subscribe( () => {
      this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
    }, err =>  console.error(err) );
  }
}
