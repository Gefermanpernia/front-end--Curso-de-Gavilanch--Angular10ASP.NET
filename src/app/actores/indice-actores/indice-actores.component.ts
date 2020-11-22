import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { actorDTO } from '../actor';
import { ActoresService } from '../actores.service';

@Component({
  selector: 'app-indice-actores',
  templateUrl: './indice-actores.component.html',
  styleUrls: ['./indice-actores.component.css']
})
export class IndiceActoresComponent implements OnInit {

  constructor(private actoreService: ActoresService) { }

  actores: actorDTO[];
  cantidadTotalRegistro;
  cantidadRegistrosAMostrar = 10;
  paginaActual = 1;
  columnasAMostrar = ['id', 'nombre', 'acciones'];


  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar){
    this.actoreService.obtenerTodo(pagina, cantidadElementosAMostrar).subscribe(
      (respuesta: HttpResponse<actorDTO[]>) => {
        this.actores = respuesta.body;
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
    this.actoreService.borrar(id)
    .subscribe( () => {
      this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
    }, err =>  console.error(err) );
  }
}
