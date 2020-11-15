import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-input-markdown',
    templateUrl: './input-markdown.component.html',
    styleUrls: ['./input-markdown.component.css'],
})
export class InputMarkdownComponent implements OnInit {

    contenidoMarkdown = '';
    @Output()
    changeMarkdown: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    ngOnInit(): void {}

    inputTexArea(texto: string) {
        // console.log(texto);
        this.contenidoMarkdown = texto;
        this.changeMarkdown.emit(texto);
    }
}
