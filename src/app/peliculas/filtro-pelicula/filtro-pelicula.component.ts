import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-filtro-pelicula',
    templateUrl: './filtro-pelicula.component.html',
    styleUrls: ['./filtro-pelicula.component.css'],
})
export class FiltroPeliculaComponent implements OnInit {

    constructor(private formBuilder: FormBuilder) {}

    form: FormGroup;

    generos = [
        {id: 1, nombre: 'Drama'},
        {id: 2, nombre: 'Comedia'},
        {id: 3, nombre: 'Accion'},
    ];

    peliculas = [
        {titulo: 'Spider-man: Far from Home', enCines: false, proximosEstrenos: true, generos: [1, 3], poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'},
        {titulo: 'Moana', enCines: true, proximosEstrenos: true, generos: [2], poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'},
        {titulo: 'Inception', enCines: false, proximosEstrenos: false, generos: [1, 2, 3], poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg'},
    ];

    peliculasOriginal = this.peliculas;

    formularioOriginal = {
        titulo: '',
        generoId: 0,
        proximosEstrenos: false,
        enCines: false,
    }
    ngOnInit(): void {
        this.form = this.formBuilder.group(this.formularioOriginal);
        this.form.valueChanges.subscribe( valores => {
            this.peliculas = this.peliculasOriginal;
            this.buscarPelculas(valores);
        });
    }

    buscarPelculas(valores: any): void{
        if (valores.titulo) {
            this.peliculas = this.peliculas
                            .filter(pelicula =>
                                pelicula.titulo.indexOf(valores.titulo) !== -1
                            );
        }
        if (valores.generoId !== 0) {
            this.peliculas = this.peliculas
            .filter(pelicula =>
                pelicula.generos.indexOf(valores.generoId) !== -1
            );
        }
        if (valores.proximosEstrenos) {
            this.peliculas = this.peliculas
            .filter(pelicula =>
                pelicula.proximosEstrenos);
        }
        if (valores.enCines) {
            this.peliculas = this.peliculas
            .filter(pelicula =>
                pelicula.enCines);
        }
    }

    limpiar(): void{
        // this.form.reset();
        this.form.patchValue({
            titulo: '',
            generoId: 0,
            proximosEstrenos: false,
            enCines: false,
        });
    }
}
