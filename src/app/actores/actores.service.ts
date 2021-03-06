import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatearFecha } from '../utilidades/utilidades';
import { actorCreacionDTO, actorDTO } from './actor';

@Injectable({
  providedIn: 'root',
})
export class ActoresService {
  constructor(private http: HttpClient) {}

  private apiURL = environment.apiURL + 'actores';

  public obtenerTodo(
    pagina: number,
    cantidadRegistroAMostrar: number
  ): Observable<any> {
    let params = new HttpParams()
      .set('pagina', pagina.toString())
      .set('recordsPorPagina', cantidadRegistroAMostrar.toString());
    return this.http.get<actorDTO[]>(this.apiURL, {
      observe: 'response',
      params,
    });
  }


  // obtener un solo actor
  obtenerPorID(id: number): Observable<actorDTO> {
    return this.http.get<actorDTO>(`${this.apiURL}/${id}`);
  }
  // editar actor
  editar(id: number, actor: actorCreacionDTO) {
    const formData = this.construirFormData(actor);
    return this.http.put(`${this.apiURL}/${id}`, formData);
  }


  public borrar(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
  /**
   * crear
   */
  public crear(actor: actorCreacionDTO) {
    const formData = this.construirFormData(actor);

    return this.http.post(this.apiURL, formData);
  }

  private construirFormData(actor: actorCreacionDTO): FormData {
    const formData = new FormData();

    formData.append('nombre', actor.nombre);

    if (actor.biografia) {
      formData.append('biografia', actor.biografia);
    }
    if (actor.fechaNacimiento) {
      formData.append('fechaNacimiento', formatearFecha(actor.fechaNacimiento));
    }
    if (actor.foto) {
      formData.append('foto', actor.foto);
    }

    return formData;
  }
}
