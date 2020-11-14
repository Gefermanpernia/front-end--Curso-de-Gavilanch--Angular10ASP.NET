import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'front-end';

  peliculasEnCines: { titulo: string; fechaLanzamiento: Date; precio: number; }[];
  ocultar = false;
  peliculasProximosEstrenos = [
    // {
    //   titulo: 'avengers: endgame',
    //   fechaLanzamiento: new Date(),
    //   precio: 1400.99,
    // },
    // {
    //   titulo: 'Inception',
    //   fechaLanzamiento: new Date('2016-11-14'),
    //   precio: 400.99,
    // },
    // {
    //   titulo: 'Rocky',
    //   fechaLanzamiento: new Date('2016-11-14'),
    //   precio: 400.99,
    // },
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [
        {
          titulo: 'Spider man',
          fechaLanzamiento: new Date(),
          precio: 1400.99,
        },
        {
          titulo: 'Mohana',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 300.99,
        },
      ];
    }, 1000);
  }
  duplicarNumero(valor: number): number {
    return valor * 2;
  }

  manejarRated(voto: number): void{
    alert(voto);
  }


}
