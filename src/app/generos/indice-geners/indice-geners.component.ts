import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-indice-geners',
  templateUrl: './indice-geners.component.html',
  styleUrls: ['./indice-geners.component.css']
})
export class IndiceGenersComponent implements OnInit {

  constructor(private generosService: GenerosService) { }

  ngOnInit(): void {
    this.generosService.obtenerTodo().subscribe(generos => {
      console.log(generos);

    }, error => console.error(error));
  }

}
