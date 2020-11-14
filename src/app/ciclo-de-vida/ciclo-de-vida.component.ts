import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { RatingComponent } from '../utilidades/rating/rating.component';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css'],
})
export class CicloDeVidaComponent
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {
    constructor(private changesDetectorRef: ChangeDetectorRef ) {}

    @Input()
    titulo: string;

    @ViewChild(RatingComponent)
    ratingComponent: RatingComponent;

    timer: ReturnType<typeof setInterval>;

  // tslint:disable-next-line: variable-name
  ngOnChanges(_changes: SimpleChanges): void {
    console.log('On changes');
    console.log(_changes);
  }
  ngOnDestroy(): void {
    console.log('On Destroy');

    clearInterval(this.timer);
  }
  ngDoCheck(): void {
    console.log('Do Check');
  }
  ngAfterViewInit(): void {
    console.log('on After view init ');
    this.ratingComponent.ratingSeleccionado = 4;
    this.changesDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    console.log('on init');
    this.timer = setInterval(() => console.log(new Date().getSeconds().toString()), 1000);
  }
}
