import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../utilidades';

@Component({
    selector: 'app-input-img',
    templateUrl: './input-img.component.html',
    styleUrls: ['./input-img.component.css'],
})
export class InputImgComponent implements OnInit {
    imagenBase64: string;

    @Input()
    urlImageActual: string;

    @Output()
    archivoSeleccionado: EventEmitter<File> = new EventEmitter<File>();

    constructor() {}

    ngOnInit(): void {}


    change(event) {
        if (event.target.files.length > 0) {
            const file: File = event.target.files[0];
            toBase64(file)
                .then((value: string) => (this.imagenBase64 = value))
                .catch((erro) => console.log(erro));
            this.archivoSeleccionado.emit(file);
            this.urlImageActual = null;
        }
    }
}
