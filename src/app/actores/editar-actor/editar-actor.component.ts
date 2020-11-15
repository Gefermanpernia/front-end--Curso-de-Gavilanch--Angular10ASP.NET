import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorCreacionDTO } from '../actor';

@Component({
    selector: 'app-editar-actor',
    templateUrl: './editar-actor.component.html',
    styleUrls: ['./editar-actor.component.css'],
})
export class EditarActorComponent implements OnInit {

    modelo: ActorCreacionDTO = {
        nombre: 'Geferman',
        fechaNacimiento: new Date(),
    };

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((resp) => {
            // alert(resp.id);
        });
    }
    guardarCambios(actor: ActorCreacionDTO){
        console.log(actor);
    }
}
