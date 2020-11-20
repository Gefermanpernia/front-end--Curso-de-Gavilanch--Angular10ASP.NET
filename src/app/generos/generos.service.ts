import { HttpClient } from '@angular/common/http';
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

  public obtenerTodo(): Observable<generoDTO[]>{
    return this.http.get<generoDTO[]>(this.apiUrl);
  }

  public crear(genero: generoCreacionDTO) {
    return this.http.post(this.apiUrl, genero);
  }
}
