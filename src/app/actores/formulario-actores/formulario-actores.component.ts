import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorCreacionDTO } from '../actor';

@Component({
    selector: 'app-formulario-actores',
    templateUrl: './formulario-actores.component.html',
    styleUrls: ['./formulario-actores.component.css'],
})
export class FormularioActoresComponent implements OnInit {
    form: FormGroup;

    // tslint:disable-next-line: no-output-native
    @Output()
    submit: EventEmitter<ActorCreacionDTO> = new EventEmitter<ActorCreacionDTO>();

    @Input()
    modelo: ActorCreacionDTO;

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
        });
        if (this.modelo !== undefined) {
            this.form.patchValue(this.modelo);
        }
    }

    onSubmit() {
        this.submit.emit(this.form.value);
    }
}
