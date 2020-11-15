import { Component, OnInit } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  constructor() {}
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
  manejarClick(event: LeafletMouseEvent){
    const lat = event.latlng.lat;
    const lon = event.latlng.lng;
    console.log(lat, lon);

    this.capas = [];
    this.capas.push(marker([lat, lon]));
  }
  ngOnInit(): void {}
}
