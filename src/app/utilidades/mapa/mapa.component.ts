import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { Coordenada } from './coordenada';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  constructor() {}

  @Input()
  coordenadasIniciales: Coordenada[] = [];

  @Output()
  coordenadaSeleccionada: EventEmitter<Coordenada> = new EventEmitter<Coordenada>();

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 14,
    center: latLng(10.504920876187317, -426.89942121505743),
  };

  capas: Marker<any>[] = [];

  ngOnInit(): void {
    this.capas = this.coordenadasIniciales.map(valor => marker([valor.latitud, valor.longitud]));
  }

  manejarClick(event: LeafletMouseEvent){
    const lat = event.latlng.lat;
    const lon = event.latlng.lng;
    console.log(lat, lon);

    this.capas = [];
    this.capas.push(marker([lat, lon]));
    this.coordenadaSeleccionada.emit({latitud: lat, longitud: lon});
  }

}
