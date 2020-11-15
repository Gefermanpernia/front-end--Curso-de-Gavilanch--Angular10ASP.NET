import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorCreacionDTO, actorDTO } from '../actor';

@Component({
    selector: 'app-formulario-actores',
    templateUrl: './formulario-actores.component.html',
    styleUrls: ['./formulario-actores.component.css'],
})
export class FormularioActoresComponent implements OnInit {
    form: FormGroup;

    // tslint:disable-next-line: no-output-native
    @Output()
    OnSubmit: EventEmitter<ActorCreacionDTO> = new EventEmitter<ActorCreacionDTO>();

    @Input()
    modelo: actorDTO;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            nombre: [
                '',
                {
                    validators: [Validators.required],
                },
            ],
            fechaNacimiento: '',
            foto: '',
            biografia: '',
        });
        if (this.modelo !== undefined) {
            this.form.patchValue(this.modelo);
        }
    }
    cambioMarkdown(texto: string){

        this.form.get('biografia').setValue(texto);
    }
    archivoSeleccionado(file){
        this.form.get('foto').setValue(file);
    }
    onSubmit() {
        this.OnSubmit.emit(this.form.value);
    }
}
