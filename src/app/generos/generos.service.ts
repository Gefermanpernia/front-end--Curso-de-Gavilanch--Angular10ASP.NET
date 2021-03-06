import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { generoCreacionDTO, generoDTO } from './genero';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private apiUrl = environment.apiURL + 'generos';

  constructor(private http: HttpClient) { }

  public obtenerTodo(pagina: number, cantidadRegistroAMostrar: number): Observable<any>{
    let params = new HttpParams()
    .set('pagina', pagina.toString())
    .set('recordsPorPagina', cantidadRegistroAMostrar.toString());
    return this.http.get<generoDTO[]>(this.apiUrl, {observe: 'response', params });
  }
  public obtenerPorID(id: number): Observable<generoDTO>{

    return this.http.get<generoDTO>(`${this.apiUrl}/${id}`);
  }
  public crear(genero: generoCreacionDTO) {
    return this.http.post(this.apiUrl, genero);
  }

  public editar(id: number, genero: generoCreacionDTO){
    return this.http.put(`${this.apiUrl}/${id}`, genero);
  }

  public borrar(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
