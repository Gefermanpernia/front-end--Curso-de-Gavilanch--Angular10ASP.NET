import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {


  peliculasEnCines;
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
      this.peliculasEnCines = [
        {
          titulo: 'Spider man',
          fechaLanzamiento: new Date(),
          precio: 1400.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
        {
          titulo: 'Mohana',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 300.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
      ];

  }
}
