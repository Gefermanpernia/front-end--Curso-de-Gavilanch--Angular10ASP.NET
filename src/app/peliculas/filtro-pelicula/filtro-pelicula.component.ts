import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-filtro-pelicula',
    templateUrl: './filtro-pelicula.component.html',
    styleUrls: ['./filtro-pelicula.component.css'],
})
export class FiltroPeliculaComponent implements OnInit {

    constructor(private formBuilder: FormBuilder,
                private location: Location,
                private activatedRoute: ActivatedRoute) {}

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
    };

    ngOnInit(): void {
        this.form = this.formBuilder.group(this.formularioOriginal);

        this.leerValoresURL();
        this.buscarPelculas(this.form.value);

        this.form.valueChanges
            .subscribe( valores => {

                this.escribirParametrosBusquedaEnURL();
                this.peliculas = this.peliculasOriginal;
                this.buscarPelculas(valores);
        });
    }

    private leerValoresURL() {

        this.activatedRoute.queryParams.subscribe( (params) => {
            let objeto: any = {};

            if (params.titulo) {
                objeto.titulo = params.titulo;
            }
            if (params.generoId) {
                objeto.generoId = Number(params.generoId);
            }
            if (params.proximosEstrenos) {
                objeto.proximosEstrenos = params.proximosEstrenos;
            }
            if (params.enCines) {
                objeto.enCines = params.enCines;
            }

            this.form.patchValue(objeto);
        });
    }

    private escribirParametrosBusquedaEnURL(){
        let queryStrings = [];

        let valoresFormulario = this.form.value;

        if (valoresFormulario.titulo) {
            queryStrings.push(`titulo=${valoresFormulario.titulo}`);
        }
        if (valoresFormulario.generoId !== 0) {
            queryStrings.push(`generoId=${valoresFormulario.generoId}`);
        }
        if (valoresFormulario.proximosEstrenos) {
            queryStrings.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
        }
        if (valoresFormulario.enCines) {
            queryStrings.push(`enCines=${valoresFormulario.enCines}`);
        }
        this.location.replaceState('peliculas/buscar', queryStrings.join('&'));

    }

    buscarPelculas(valores: any){
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
